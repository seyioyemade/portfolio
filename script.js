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


let projects = [
  {
    name: 'Tonic',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work1.png',
    technologies: [
      'html',
      'css',
      'javaScript'
    ],
    linkToLiveVersion: '#',
    linkToSource: '#'
  },

  {
    name: 'Multi-Post Stories',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work2.png',
    technologies: [
      'html',
      'css',
      'javaScript'
    ],
    linkToLiveVersion: '#',
    linkToSource: '#'
  },

  {
    name: 'Tonic',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work3.png',
    technologies: [
      'html',
      'css',
      'javaScript'
    ],
    linkToLiveVersion: '#',
    linkToSource: '#'
  },

  {
    name: 'Multi-Post Stories',
    dept: {
      name: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'images/work4.png',
    technologies: [
      'html',
      'css',
      'javaScript'
    ],
    linkToLiveVersion: '#',
    linkToSource: '#'
  }
]

for (let i = 0; i < projects.length; i++) {

  let section = document.createElement('section');
  let featuredImageDiv = document.createElement('div');
  let featuredImg = document.createElement('img');

  featuredImg.src = projects[i].featuredImage;
  featuredImageDiv.appendChild(featuredImg);
  section.appendChild(featuredImageDiv);

  let content = document.createElement('div');
  content.className = 'content';
  let h3 = document.createElement('h3');
  h3.textContent = projects[i].name;
  content.appendChild(h3);
  let canopy = document.createElement('div');
  canopy.className = 'canopy';
  let h6 = document.createElement('h6');
  h6.textContent = projects[i].dept.name;
  canopy.appendChild(h6);
  let canopyLists = document.createElement('ul');
  canopyLists.className = 'canopy-lists';
  let li = document.createElement('li');
  li.textContent = projects[i].dept.role;
  canopyLists.appendChild(li);
  li = document.createElement('li');
  li.textContent = projects[i].dept.year;
  canopyLists.appendChild(li);
  canopy.appendChild(canopyLists);
  content.appendChild(canopy);

  let description = document.createElement('p');
  description.textContent = projects[i].description;
  content.appendChild(description);
  let categories = document.createElement('ul');
  categories.className = 'categories';

  for (let j = 0; j < projects[i].technologies.length; j++) {
    let li = document.createElement('li');
    li.textContent = projects[i].technologies[j];
    categories.appendChild(li);
  }
  content.appendChild(categories);
  let button = document.createElement('button');
  button.textContent = 'See Project';
  content.appendChild(button);

  section.appendChild(content);

  projectsSection.appendChild(section);
}

