const backdrop = document.querySelector('.animal-backdrop');
const modalContainer = document.querySelector('.animal-modal');

// --- ФУНКЦІЇ ЗАКРИТТЯ ---

function closeAnimalModal() {
  backdrop.classList.add('is-hidden');
  
  // Знімаємо слухач клавіатури, коли модалка закрита
  document.removeEventListener('keydown', onEscKeyPress);
}

function onBackdropClick(event) {
  // Закриваємо якщо клікнули на бекдроп, а не на контент
  if (event.target === event.currentTarget) {
    closeAnimalModal();  
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeAnimalModal();
  }
}

// --- ГОЛОВНА ФУНКЦІЯ (ЕКСПОРТ) ---

export function openAnimalModal(animalData) {
  backdrop.classList.remove('is-hidden');
 
  modalContainer.innerHTML = `
    <button type="button" class="animal-modal-close" aria-label="Close modal">
      &times;
    </button>
    
    <div class="animal-modal-thumb">
      <img src="${animalData.img}" alt="${animalData.name}" class="animal-modal-img" />
    </div>
    
    <div class="animal-modal-info">
      <p class="animal-modal-type">${animalData.type}</p>
      <h2 class="animal-modal-title">${animalData.name}</h2>
      <p class="animal-modal-meta">${animalData.age} &bull; ${animalData.gender}</p>
      
      <div class="animal-modal-details">
        <p class="animal-modal-label">Опис:</p>
        <p class="animal-modal-text">${animalData.description}</p>
      </div>
      
      <button type="button" class="btn-action take-home-btn">Взяти додому</button>
    </div>
  `;

  const closeButton = modalContainer.querySelector('.animal-modal-close');
  const takeHomeButton = modalContainer.querySelector('.take-home-btn');

  // Слухачі
  closeButton.addEventListener('click', closeAnimalModal);
  backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeyPress);

  // Логіка кнопки "Взяти додому"
  takeHomeButton.addEventListener('click', () => {
    closeAnimalModal(); 
    console.log('Відкриваємо модалку замовлення...');
  });
}