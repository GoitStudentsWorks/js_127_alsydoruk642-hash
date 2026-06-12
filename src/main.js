/* Плавне прокр. */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* Анімація при завантаженні */
window.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.fade-in-element');
  
  elementsToAnimate.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 200);
  });
});