/**
 * @param {Object} animal
 */
export function openAnimalModal(animal) {
  const backdrop = document.querySelector('.animal-backdrop');
  if (!backdrop) return;

  backdrop.innerHTML = `
    <div class="animal-modal">
      <button type="button" class="animal-modal-close" aria-label="Close modal">
        &times;
      </button>

      <div class="animal-modal-thumb">
        <img src="${animal.img}" alt="${animal.name}" class="animal-modal-img" />
      </div>

      <div class="animal-modal-info">
        <p class="animal-modal-type">${animal.type}</p>
        <h2 class="animal-modal-title">${animal.name}</h2>
        <p class="animal-modal-meta">${animal.meta}</p>

        <div class="animal-modal-scroll-container">
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Опис:</p>
            <p class="animal-detail-text">${animal.description}</p>
          </div>
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Здоров'я:</p>
            <p class="animal-detail-text">${animal.health}</p>
          </div>

          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Поведінка:</p>
            <p class="animal-detail-text">${animal.behavior}</p>
          </div>
          
        </div>
        
        <button type="button" class="animal-modal-btn">Взяти додому</button>
      </div>
    </div>
  `;

  backdrop.classList.remove('is-hidden');
  
  document.body.style.overflow = 'hidden';

  // Стандартні слухачі закриття
  backdrop.querySelector('.animal-modal-close').addEventListener('click', closeAnimalModal);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscPress);

  // ========================================================
  // ОНОВЛЕНИЙ ФУНКЦІОНАЛ: ЗВ'ЯЗОК З МОДАЛКОЮ (order-modal)
  // ========================================================
  const takeHomeBtn = backdrop.querySelector('.animal-modal-btn');
  if (takeHomeBtn) {
    takeHomeBtn.addEventListener('click', () => {
      // 1. Закриваємо поточну модалку з деталями
      closeAnimalModal();

      // 2. Шукаємо на сторінці майбутню модалку Роми за ID
        const orderModal = document.getElementById('order-modal');
        
      // Модалка з формою вже є.
      if (orderModal) {
        orderModal.classList.remove('is-hidden');
        document.body.style.overflow = 'hidden'; 
      } else {
        // Якщо розмітки колеги ще немає на сторінці, звіт в консоль
        console.log('Кнопка "Взяти додому" працює!');
      }
    });
  }
}

function closeAnimalModal() {
  const backdrop = document.querySelector('.animal-backdrop');
  if (backdrop) {
    backdrop.classList.add('is-hidden');
    backdrop.innerHTML = ''; 
  }
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscPress);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeAnimalModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    closeAnimalModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const petListContainer = document.querySelector('.pet-list-cards');

  if (petListContainer) {
    petListContainer.addEventListener('click', (event) => {
      const moreBtn = event.target.closest('.pet-list-card-more-btn');
      if (!moreBtn) return;

      const card = moreBtn.closest('.pet-list-card') || moreBtn.closest('li');
      if (!card) return;

      const animalData = {
        img: card.querySelector('.pet-list-card-img')?.src || card.querySelector('img')?.src || '',
        name: card.querySelector('.pet-list-card-title')?.textContent?.trim() || 'Тваринка',
        type: card.querySelector('.pet-list-card-type')?.textContent?.trim() || 'Вид',
        meta: card.querySelector('.pet-list-card-meta')?.textContent?.trim() || card.querySelector('.animal-modal-meta')?.textContent?.trim() || 'Вік і стать',
        
        description: card.querySelector('.pet-list-card-desc')?.textContent?.trim() || 'Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.',
        health: card.querySelector('.pet-list-card-health')?.textContent?.trim() || 'Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.',
        behavior: card.querySelector('.pet-list-card-behavior')?.textContent?.trim() || 'Бажано бути єдиною твариною в сім\'ї. Не любить конкуренції за увагу.'
      };

      openAnimalModal(animalData);
    });
  }
});