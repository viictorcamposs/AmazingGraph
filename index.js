const menuBtn = document.getElementById('menuBtn');
const menuLinks = document.getElementById('menuLinks');
const loginModal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

function openLoginModal() {  
  menuLinks.classList.remove('active');
  loginModal.classList.add('active');
}

closeModalBtn.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

menuBtn.addEventListener('click', () => {
  if(!menuLinks.classList.contains('active')) {
    menuLinks.classList.add('active');
  } else {
    menuLinks.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  if(menuLinks.classList.contains('active')) {
    menuLinks.classList.remove('active');
  }
});