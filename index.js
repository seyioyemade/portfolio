const mobileMenuIcons = document.querySelectorAll('nav > button > img');
const mobileMenu = document.querySelectorAll('.mobile-menu-canvas li');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');
const projectsSection = document.querySelector('#portfolio');

for (let i = 0; i < mobileMenu.length; i += 1) {
  mobileMenu[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}

for (let i = 0; i < mobileMenuIcons.length; i += 1) {
  mobileMenuIcons[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}

const projects = [
  {
    name: 'Movie Application',
    dept: {
      name: 'microverse',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'Movie Application involves the use of API to fetch and interact with some movies data on the website.',
    featuredImage: 'images/work4.png',
    technologies: [
      'html',
      'css',
      'javaScript',
      'Webpack',
    ],
    linkToLiveVersion: 'https://seyioyemade.github.io/movie-application/dist/',
    linkToSource: 'https://github.com/seyioyemade/movie-application',
  },

  {
    name: 'Twenties Leadership Summit 2023',
    dept: {
      name: 'microverse',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'Twenties Leadership Summit is a developmental program designed to create a profound shift in the thinking and behavior of twenties.',
    featuredImage: 'images/work1.png',
    technologies: [
      'html',
      'css',
      'javaScript',
    ],
    linkToLiveVersion: 'https://seyioyemade.github.io/twenties-leadership-summit-2023/',
    linkToSource: 'https://github.com/seyioyemade/twenties-leadership-summit-2023',
  },

  {
    name: 'Multi-Post Stories',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work2.png',
    technologies: [
      'html',
      'css',
      'javaScript',
    ],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },

  {
    name: 'Tonic',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work3.png',
    technologies: [
      'html',
      'css',
      'javaScript',
    ],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },

];

const popupWindow = function (object) {
  const section = document.createElement('section');
  section.className = 'details-popup';

  const popupContents = document.createElement('div');
  popupContents.className = 'popup-contents';

  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.textContent = object.name;
  const modalCloseBtn = document.createElement('button');
  modalCloseBtn.className = 'nohover';
  const modalClose = document.createElement('img');
  modalClose.src = 'images/close-black.svg';
  modalClose.className = 'details-popup-close';
  modalClose.setAttribute('alt', 'close');
  modalCloseBtn.appendChild(modalClose);

  header.appendChild(h3);
  header.appendChild(modalCloseBtn);
  popupContents.appendChild(header);

  modalCloseBtn.addEventListener('click', () => {
    section.classList.toggle('hide');
  });

  const canopy = document.createElement('div');
  canopy.className = 'canopy';
  const h6 = document.createElement('h6');
  h6.textContent = object.dept.name;
  canopy.appendChild(h6);
  const canopyLists = document.createElement('ul');
  canopyLists.className = 'canopy-lists';
  let li = document.createElement('li');
  li.textContent = object.dept.role;
  canopyLists.appendChild(li);
  li = document.createElement('li');
  li.textContent = object.dept.year;
  canopyLists.appendChild(li);
  canopy.appendChild(canopyLists);
  popupContents.appendChild(canopy);

  const popupImgDiv = document.createElement('div');
  const popupImg = document.createElement('img');
  popupImg.src = object.featuredImage;
  popupImg.className = 'popup-image';
  popupImg.setAttribute('alt', 'project image');
  popupImgDiv.appendChild(popupImg);
  popupContents.appendChild(popupImgDiv);

  const popupCategoriesBtnsDiv = document.createElement('div');
  popupCategoriesBtnsDiv.className = 'popup-categories-buttons';

  let div = document.createElement('div');
  const description = document.createElement('p');
  description.textContent = object.description;
  div.appendChild(description);
  popupCategoriesBtnsDiv.appendChild(div);

  div = document.createElement('div');

  const categories = document.createElement('ul');
  categories.className = 'categories';

  for (let j = 0; j < object.technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = object.technologies[j];
    categories.appendChild(li);
  }
  div.appendChild(categories);

  const hr = document.createElement('hr');
  div.appendChild(hr);

  const detailsBtns = document.createElement('div');
  detailsBtns.className = 'details-button';

  const liveAnchorLink = document.createElement('a');
  liveAnchorLink.setAttribute('href', object.linkToLiveVersion);
  liveAnchorLink.setAttribute('target', '_blank');
  const seeLiveBtn = document.createElement('button');
  seeLiveBtn.textContent = 'See Live';
  const seeLive = document.createElement('img');
  seeLive.src = 'images/live.svg';
  seeLive.setAttribute('alt', 'live icon');
  seeLiveBtn.appendChild(seeLive);
  liveAnchorLink.appendChild(seeLiveBtn);
  detailsBtns.appendChild(liveAnchorLink);

  const sourceAnchorLink = document.createElement('a');
  sourceAnchorLink.setAttribute('href', object.linkToSource);
  sourceAnchorLink.setAttribute('target', '_blank');
  const seeSourceBtn = document.createElement('button');
  seeSourceBtn.textContent = 'See Source';
  const seeSource = document.createElement('img');
  seeSource.src = 'images/github-in-button.svg';
  seeSource.setAttribute('alt', 'source icon');
  seeSourceBtn.appendChild(seeSource);
  sourceAnchorLink.appendChild(seeSourceBtn);
  detailsBtns.appendChild(sourceAnchorLink);

  div.appendChild(detailsBtns);

  popupCategoriesBtnsDiv.appendChild(div);
  popupContents.appendChild(popupCategoriesBtnsDiv);

  overlay.appendChild(popupContents);
  section.appendChild(overlay);

  document.body.appendChild(section);
};

for (let i = 0; i < projects.length; i += 1) {
  const section = document.createElement('section');
  const featuredImageDiv = document.createElement('div');
  const featuredImg = document.createElement('img');

  featuredImg.src = projects[i].featuredImage;
  featuredImageDiv.appendChild(featuredImg);
  section.appendChild(featuredImageDiv);

  const content = document.createElement('div');
  content.className = 'content';
  const h3 = document.createElement('h3');
  h3.textContent = projects[i].name;
  content.appendChild(h3);
  const canopy = document.createElement('div');
  canopy.className = 'canopy';
  const h6 = document.createElement('h6');
  h6.textContent = projects[i].dept.name;
  canopy.appendChild(h6);
  const canopyLists = document.createElement('ul');
  canopyLists.className = 'canopy-lists';
  let li = document.createElement('li');
  li.textContent = projects[i].dept.role;
  canopyLists.appendChild(li);
  li = document.createElement('li');
  li.textContent = projects[i].dept.year;
  canopyLists.appendChild(li);
  canopy.appendChild(canopyLists);
  content.appendChild(canopy);

  const description = document.createElement('p');
  description.textContent = projects[i].description;
  content.appendChild(description);
  const categories = document.createElement('ul');
  categories.className = 'categories';

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projects[i].technologies[j];
    categories.appendChild(li);
  }
  content.appendChild(categories);
  const button = document.createElement('button');
  button.textContent = 'See Project';
  button.className = 'projectBtn';
  content.appendChild(button);

  section.appendChild(content);

  projectsSection.appendChild(section);

  button.addEventListener('click', () => {
    popupWindow(projects[i]);
  });
}

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userMsg = document.querySelector('#msg');
const form = document.querySelector('form');
const emailError = document.querySelector('.error');
const emailRegExp = /^[a-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/;

form.addEventListener('submit', (event) => {
  if (emailRegExp.test(userEmail.value)) {
    emailError.textContent = '';
    localStorage.clear();
  } else {
    emailError.textContent = 'Your responses were not sent. Kindly ensure your email address is in lower case.';
    event.preventDefault();
  }
});

form.addEventListener('input', () => {
  const userInformation = {
    name: userName.value,
    email: userEmail.value,
    msg: userMsg.value,
  };

  localStorage.setItem('userInformation', JSON.stringify(userInformation));
});

if (localStorage.getItem('userInformation')) {
  const currentInformation = localStorage.getItem('userInformation');
  const currentInformationObj = JSON.parse(currentInformation);
  userName.value = currentInformationObj.name;
  userEmail.value = currentInformationObj.email;
  userMsg.value = currentInformationObj.msg;
}
