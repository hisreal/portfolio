(() => {
  const projects = {
  "zionexsolution": {
    "title": "Zionaex Solutions",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/zionexsolution.png",
    "url": "https://www.zionaexsolutions.obasete.com/",
    "copy": "A modern and professional corporate website designed and developed for Zionaex Solutions to establish a strong digital presence, showcase its business offerings, and connect with potential clients and partners. The website focuses on professional branding, intuitive navigation, and an engaging user experience.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Company profile and business information",
      "Business services and solutions showcase",
      "Professional visual branding and layout",
      "Easy navigation and structured content",
      "Contact and business enquiry functionality",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "digitalduke": {
    "title": "Digital Duke",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/digitalduke.png",
    "url": "https://www.digitalduke.online/",
    "copy": "A modern and engaging digital resource platform designed and developed for Digital Duke to promote Christian growth, children's education, and AI powered productivity. The website provides a professional digital presence for showcasing educational materials, faith resources, and innovative AI solutions while building an interactive community of families, churches, and professionals.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Christian devotionals and Bible study resources showcase",
      "Children's educational books and learning materials",
      "AI productivity tools and digital resources presentation",
      "Customer testimonials and community engagement section",
      "Email newsletter subscription functionality",
      "Professional branding and structured content layout",
      "Contact information and company profile",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "onyemachifoundation": {
    "title": "Onyemachi Foundation",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/onyemachi.png",
    "url": "https://www.onyemachifoundation.com/",
    "copy": "A modern and professional nonprofit organisation website designed and developed for Onyemachi Foundation to establish a strong digital presence, communicate its humanitarian mission, and promote charitable initiatives. The website focuses on engaging visual design, community awareness, and an intuitive user experience that encourages public involvement and support.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Foundation mission and vision showcase",
      "Humanitarian programmes and initiatives presentation",
      "Community outreach and impact highlights",
      "Professional visual branding and layout",
      "Contact and partnership enquiry options",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "shiningholdings": {
    "title": "Shining Holdings",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/shinning.png",
    "url": "https://www.shiningholdings.com/",
    "copy": "A modern and professional corporate website designed and developed for Shining Holdings to establish a strong digital presence, showcase its business operations, and connect with potential clients, investors, and business partners. The website focuses on elegant visual design, professional branding, intuitive navigation, and a seamless user experience.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Company profile and corporate information",
      "Business services and operations showcase",
      "Professional visual branding and layout",
      "Easy navigation and structured content",
      "Contact and business enquiry functionality",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "amobichomes": {
    "title": "Amobi Homes",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/amobichome.png",
    "url": "https://www.amobichomes.com/",
    "copy": "A modern and professional real estate website designed and developed for Amobi Homes to establish a strong digital presence, showcase residential properties, and connect prospective buyers and investors with real estate opportunities. The website focuses on elegant visual design, seamless navigation, and an engaging user experience.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Real estate properties and listings showcase",
      "Detailed property information and image galleries",
      "Company profile and corporate information",
      "Professional visual branding and layout",
      "Contact and property enquiry functionality",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "fountaingraphics": {
    "title": "Fountain Graphics & Communication",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/fountaingraphics.png",
    "url": "https://www.fountaingraphics.com/",
    "copy": "A modern and visually engaging corporate website designed and developed for Fountain Graphics & Communication, a creative agency specialising in graphic design, website development, logo design, and branding solutions. The website showcases the company's creative expertise, services, and professional achievements while providing an intuitive and engaging user experience.",
    "features": [
      "Modern and responsive website design",
      "Clean and visually appealing user interface",
      "Creative services showcase",
      "Graphic design, web design, and branding portfolio",
      "Company profile and business achievements",
      "Professional visual branding and layout",
      "Contact and business enquiry functionality",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "umachi": {
    "title": "Umachi Oil & Gas",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/umachi.png",
    "url": "https://www.umachioilgas.com/",
    "copy": "A modern and professional corporate website designed and developed for Umachi Oil & Gas to strengthen its digital presence, showcase its oil and gas services, and connect with potential clients and business partners. The website emphasises professional branding, intuitive navigation, and a seamless user experience across multiple devices.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Oil and gas services showcase",
      "Company profile and corporate information",
      "Professional visual design and branding",
      "Easy navigation and structured content layout",
      "Contact and business enquiry functionality",
      "Optimised viewing across desktop, tablet, and mobile devices"
    ]
  },
  "hansel": {
    "title": "Hansel Technologies",
    "category": "Website Development",
    "image": "assets/img/portfolio/web/hansel.png",
    "url": "https://www.hanseltechng.com/",
    "copy": "A modern, professional corporate website designed and developed for Hansel Technologies, a company specialising in solar energy solutions, renewable energy, electrical engineering, and security systems. The website showcases the company's products and services while providing an engaging digital experience for potential clients.",
    "features": [
      "Modern and responsive website design",
      "Clean and intuitive user interface",
      "Solar energy products and services showcase",
      "Electrical engineering and security solutions",
      "Company profile and corporate information",
      "Professional branding and visual presentation",
      "Contact and customer enquiry options",
      "Mobile, tablet, and desktop compatibility"
    ]
  }
};
  const project = projects[new URLSearchParams(location.search).get('project')] || projects.umachi;
  const preview = document.querySelector('#details-desktop-preview');
  if (!preview) return;
  preview.src = project.image;
  preview.alt = `${project.title} desktop preview`;
  preview.dataset.liveUrl = project.url;
  preview.dataset.desktopUrl = project.url;
  preview.dataset.mobileUrl = project.url;
  preview.dataset.mobileScreenshot = project.image;
  document.querySelector('#details-project-title').textContent = project.title;
  document.querySelector('#details-project-category').textContent = project.category;
  document.querySelector('#details-project-client').textContent = project.title;
  document.querySelector('#details-overview-copy').textContent = project.copy;
  const features = document.querySelector('#details-project-features');
  features.replaceChildren();
  project.features.forEach(text => {
    const column = document.createElement('div');
    column.className = 'col-md-6';
    const item = document.createElement('div');
    item.className = 'feature-item';
    const icon = document.createElement('i');
    icon.className = 'bi bi-check-circle-fill';
    icon.setAttribute('aria-hidden', 'true');
    const description = document.createElement('p');
    description.textContent = text;
    item.append(icon, description);
    column.append(item);
    features.append(column);
  });
  const link = document.querySelector('#details-project-url');
  if (project.url) { link.href = project.url; link.textContent = project.url.replace(/^https?:\/\//, '').replace(/\/$/, ''); }
  else { link.closest('li').hidden = true; }
})();
