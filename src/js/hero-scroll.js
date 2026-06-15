// Функція для плавного прокручування
export function initSmoothScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    e.preventDefault();

    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);

    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY;

    document.scrollingElement.scrollTo({
      top,
      behavior: 'smooth',
    });
  });
}

// Функція для анімації елементів Hero (якщо вони мають клас .fade-in-element)
export function initHeroAnimation() {
  window.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');

    elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200);
    });
  });
}
