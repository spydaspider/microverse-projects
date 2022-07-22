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

// Object for saving form data.
// Create initial object for the form data.
const formData = {
  name: '',
  email: '',
  message: '',
};
// load the object with the form data.

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

function populatePopupMenu(parentId) {
  projects.forEach((project) => {
    if (parentId === project.id) {
      document.getElementById('pop-header').innerHTML = project.title;
      document.getElementById('');
      document.getElementById('mobile-image').src = project.image;
      document.getElementById('desktop-image').src = project.image;
      // pass id to function to make list.
      /*       addLinks(project.link);
       */ popupView.classList.add('active');
    }
  });
}
works.addEventListener('click', (event) => {
  if (event.target.className === 'btn') {
    const parentId = event.target.parentNode.id;
    populatePopupMenu(parentId);
  }
  if (event.target.className === 'stripe') {
    popupView.classList.remove('active');
  }
});
// Function to save form data
function saveFormData(name, email, message) {
  // Put values into the object.
  formData.name = name;
  formData.email = email;
  formData.message = message;
  // Serialize the object with JSON
  const formDataSerialized = JSON.stringify(formData);
  localStorage.setItem('formData', formDataSerialized);
}
// function for validating the email.
function isValidatedEmail(email) {
  // logic for the validation goes here.
  // Converting the string to array
  // set this email to lower and compare them.
  const lowerEmail = email.toLowerCase();
  if (email === lowerEmail) {
    return true;
  }
  return false;
}

// Validate form
const addMobileForm = document.forms['mobile-form'];
const addDesktopForm = document.forms['dt-form'];
const errorMsgMobile = document.querySelector('.error-msg-mob');
const errorMsgDesktop = document.querySelector('.error-msg');
// validate mobile form first
addMobileForm.addEventListener('submit', (e) => {
  const email = addMobileForm.querySelector('input[type = "email"]').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (isValidatedEmail(email)) {
    errorMsgMobile.classList.remove('active');
    // Save form data into storage.
    saveFormData(name, email, message);
  } else {
    e.preventDefault();
    errorMsgMobile.classList.add('active');
  }
});
// Validate Desktop form
addDesktopForm.addEventListener('submit', (e) => {
  const email = addDesktopForm.querySelector('input[type = "email"]').value;
  const name = document.getElementById('name-dt').value;
  const message = document.getElementById('message-dt').value;

  if (isValidatedEmail(email)) {
    errorMsgMobile.classList.remove('active');
    saveFormData(name, email, message);
  } else {
    e.preventDefault();
    errorMsgDesktop.classList.add('active');
  }
});

// Set eventListeners for the form with change.
addMobileForm.addEventListener('change', () => {
  const email = addMobileForm.querySelector('input[type = "email"]').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  saveFormData(name, email, message);
});
// Validate Desktop form
addDesktopForm.addEventListener('change', () => {
  const email = addDesktopForm.querySelector('input[type = "email"]').value;
  const name = document.getElementById('name-dt').value;
  const message = document.getElementById('message-dt').value;

  saveFormData(name, email, message);
});
// Function to get localStorage objects.
if (localStorage !== null) {
  // populate the form with the data.
  const nameFieldPopulate = document.getElementById('name');
  const emailFieldPopulate = document.getElementById('email');
  const messageFieldPopulate = document.getElementById('message');

  const nameDtFieldPopulate = document.getElementById('name-dt');
  const messageDtFieldPopulate = document.getElementById('message-dt');
  const emailDtFieldPopulate = document.getElementById('email-dt');
  // Get the object from the local storage.
  // Deserialize the object.
  const deserializedFormData = JSON.parse(localStorage.getItem('formData'));
  nameFieldPopulate.value = deserializedFormData.name;
  emailFieldPopulate.value = deserializedFormData.email;
  messageFieldPopulate.value = deserializedFormData.message;
  nameDtFieldPopulate.value = deserializedFormData.name;
  emailDtFieldPopulate.value = deserializedFormData.email;
  messageDtFieldPopulate.value = deserializedFormData.message;
}
