const menuIcon = document.querySelector('.menu-icon');
const barX1 = document.querySelector('.bar-x:nth-child(1)');
const barX3 = document.querySelector('.bar-x:nth-child(3)');
const bar1 = document.querySelector('.bar:nth-child(1)');
const bar2 = document.querySelector('.bar:nth-child(2)');
const navContainer = document.querySelector('.nav-container');

const bar3 = document.querySelector('.bar:nth-child(3)');

const navMenu = document.querySelector('.nav-menu');
const xIcon = document.querySelector('.x-icon');
const works = document.querySelector('#works');
const popupView = document.querySelector('.popup-view-bg');

const projects = [
  {
    id: '1',
    title: 'Tonic',
    image: 'images/section-2.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    linkMobile: ['html', 'css', 'javascript'],
  },
  {
    id: '2',
    title: 'Multi-Post-Stories',
    image: 'images/section-3.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'css', 'javascript'],
  },
  {
    id: '3',
    title: 'Tonic',
    image: 'images/section-4.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'css', 'javascript'],
  },
  {
    id: '4',
    title: 'Multi-Post-Stories',
    image: 'images/section-5.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'css', 'javascript'],
  },
  {
    id: '5',
    title: 'Tonic',

    image: 'images/desktop-section-1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'ruby.on.rails', 'css', 'javascript'],
  },
  {
    id: '6',
    title: 'Multi-Post-Stories',
    image: 'images/desktop-section-2.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'ruby.on.rails', 'css', 'javascript'],
  },
  {
    id: '7',
    title: 'FaceBook 360',
    image: 'images/desktop-section-3.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'ruby.on.rails', 'css', 'javascript'],
  },
  {
    id: '8',
    title: 'Uber Navigation',
    image: 'images/desktop-section-4.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea',
    link: ['html', 'ruby.on.rails', 'css', 'javascript'],
  },
];

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  barX1.classList.toggle('active');
  barX3.classList.toggle('active');
  bar1.classList.toggle('active');
  bar2.classList.toggle('active');
  bar3.classList.toggle('active');
  navContainer.classList.toggle('active');
});
xIcon.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  navMenu.classList.remove('active');
  barX1.classList.remove('active');
  barX3.classList.remove('active');
  bar1.classList.remove('active');
  bar2.classList.remove('active');
  bar3.classList.remove('active');
  navContainer.classList.remove('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  navMenu.classList.remove('active');
  barX1.classList.remove('active');
  barX3.classList.remove('active');
  bar1.classList.remove('active');
  bar2.classList.remove('active');
  bar3.classList.remove('active');
  navContainer.classList.remove('active');
}));


