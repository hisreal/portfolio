/* Opt-in device frames. Project data stays on the original thumbnail in index.html. */
(() => {
  'use strict';
  const safeUrl = value => {
    if (!value) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  document.querySelectorAll('img[data-device-preview]').forEach(thumbnail => {
    const card = thumbnail.closest('.portfolio-wrap') || thumbnail.closest('.project-device-slide');
    const heading = card && card.querySelector('h4');
    const title = heading ? heading.textContent : thumbnail.alt.replace(/\s+preview$/i, '');
    const data = thumbnail.dataset;
    const liveUrl = safeUrl(data.liveUrl);
    card.classList.add('device-project');
    const stage = document.createElement('div');
    stage.className = 'device-stage';
    stage.setAttribute('aria-label', `${title} device previews`);
    const previews = [];
    ['desktop', 'mobile'].forEach(device => {
      const frame = document.createElement('div');
      frame.className = `device-frame device-${device}`;
      const chrome = document.createElement('div');
      chrome.className = 'device-chrome';
      if (device === 'desktop') {
        const dots = document.createElement('span');
        dots.className = 'device-dots';
        dots.setAttribute('aria-hidden', 'true');
        dots.innerHTML = '<i></i><i></i><i></i>';
        const address = document.createElement('span');
        address.className = 'device-address';
        address.textContent = liveUrl ? new URL(liveUrl).hostname : 'Project artwork';
        chrome.append(dots, address);
      } else chrome.setAttribute('aria-hidden', 'true');
      const screen = document.createElement('div');
      screen.className = 'device-screen';
      const screenshot = thumbnail.cloneNode(false);
      screenshot.removeAttribute('data-device-preview');
      screenshot.className = 'device-screenshot';
      screenshot.alt = `${title} — ${device === 'mobile' && data.mobileScreenshot ? 'mobile screenshot' : 'project artwork'}`;
      if (device === 'mobile' && data.mobileScreenshot) screenshot.src = data.mobileScreenshot;
      screenshot.addEventListener('error', () => { screenshot.hidden = true; });
      const placeholder = document.createElement('span');
      placeholder.className = 'device-placeholder';
      placeholder.textContent = title;
      screen.append(placeholder, screenshot);
      frame.append(chrome, screen);
      const resize = new ResizeObserver(() => {
        const iframe = screen.querySelector('iframe');
        if (iframe) iframe.style.transform = `scale(${screen.clientWidth / (device === 'desktop' ? 1280 : 390)})`;
      });
      resize.observe(screen);
      stage.append(frame);
      previews.push({ screen, url: safeUrl(data[`${device}Url`]) || liveUrl, device });
    });
    thumbnail.replaceWith(stage);
    const info = card.querySelector('.content');
    for (const [key, className] of [['description', 'device-description'], ['technologies', 'device-technologies']]) {
      if (info && data[key]) {
        const paragraph = document.createElement('p');
        paragraph.className = className;
        paragraph.textContent = data[key];
        info.insertBefore(paragraph, info.querySelector('.portfolio-links'));
      }
    }
    card.querySelectorAll('.portfolio-links a').forEach(link => {
      link.setAttribute('aria-label', `${link.title} — ${title}`);
    });
    const controls = document.createElement('div');
    controls.className = 'device-controls';
    const status = document.createElement('p');
    status.className = 'device-status';
    status.setAttribute('role', 'status');
    status.textContent = 'Project artwork · live URL not configured';
    let frames = [];
    let timeout;
    const showArtwork = () => {
      clearTimeout(timeout);
      frames.forEach(frame => frame.remove());
      frames = [];
      status.textContent = 'Showing project artwork';
    };
    if (previews.some(preview => preview.url)) {
      status.textContent = 'Project artwork · live preview available';
      const load = document.createElement('button');
      load.type = 'button';
      load.textContent = 'Load live previews';
      const fallback = document.createElement('button');
      fallback.type = 'button';
      fallback.textContent = 'Show artwork';
      fallback.addEventListener('click', showArtwork);
      load.addEventListener('click', () => {
        showArtwork();
        status.textContent = 'Loading previews…';
        let pending = previews.filter(preview => preview.url).length;
        previews.forEach(({ screen, url, device }) => {
          if (!url) return;
          const iframe = document.createElement('iframe');
          iframe.title = `${title} — ${device} live website`;
          iframe.loading = 'lazy';
          iframe.referrerPolicy = 'no-referrer';
          iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
          iframe.addEventListener('error', () => {
            showArtwork();
            status.textContent = 'Preview unavailable. Open the live project or view its artwork.';
          });
          iframe.addEventListener('load', () => {
            if (!frames.includes(iframe)) return;
            if (--pending === 0) {
              clearTimeout(timeout);
              status.textContent = 'If a preview is blank or blocked, choose Show artwork or open the live project.';
            }
          });
          frames.push(iframe);
          iframe.src = url;
          screen.append(iframe);
          iframe.style.transform = `scale(${screen.clientWidth / (device === 'desktop' ? 1280 : 390)})`;
        });
        timeout = setTimeout(() => {
          showArtwork();
          status.textContent = 'Preview took too long. Open the live project or try again.';
        }, 20000);
      });
      controls.append(load, fallback);
    }
    if (liveUrl) {
      const link = document.createElement('a');
      link.href = liveUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View Live Project ↗';
      controls.append(link);
    }
    card.append(controls, status);
  });
})();
