const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile-menu');

const body = document.body;

export function openModal() {
  backdrop.classList.add('is-open');
  body.classList.add('no-scroll');
  mobileMenu.classList.add('is-open');
}

export function closeModal() {
  backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');
  mobileMenu.classList.remove('is-open');
}

/* OPEN */
openBtn.addEventListener('click', openModal);

/* CLOSE button */
closeBtn.addEventListener('click', closeModal);

/* CLOSE on backdrop click */
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

/* ESC */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* CLOSE on menu link click */
const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeModal();
  });
});
