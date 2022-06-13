const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const hidden = document.body;

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('open');
  overlay.classList.toggle('block');
  hidden.classList.toggle('hidden');
  
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link') || event.target.classList.contains('block')) {
        hamburger.classList.remove('is-active');
        nav.classList.remove('open');
        overlay.classList.remove('block');
        hidden.classList.remove('hidden');
        
    }
  }
  nav.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);