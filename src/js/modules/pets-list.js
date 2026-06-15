import { getCategories, getCategory } from '../api/api-categories';
console.log('pets-list.js loaded');

let curPage = 1;
let countPages = 1;
let countCards = 8;
let categoryId = 'all';
let heightCard = 0;

const categoriesElem = document.querySelector('.pet-list-categories');
const petListElem = document.querySelector('.pet-list-cards');
const moreBtn = document.querySelector('.pet-list-more-btn');
const loader = document.querySelector('.loader');

categoriesElem.addEventListener('click', onCategoriesClick);
petListElem.addEventListener('click', onCardClick);
moreBtn.addEventListener('click', onMoreBtnClick);

function checkCountCards() {
  return window.innerWidth < 1366 ? 8 : 9;
}

function showLoadMoreButton() {
  if (moreBtn) {
    moreBtn.classList.remove('hidden');
    moreBtn.blur();
  }
}

function hideLoadMoreButton() {
  if (moreBtn) {
    moreBtn.classList.add('hidden');
  }
}

function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

function checkMoreButton() {
  if (curPage < countPages) {
    showLoadMoreButton();
  } else {
    alert('В базі даних більше нема карток');
  }
}

function scrollCards(dir) {
  window.scrollBy({
    top: heightCard * dir,
    behavior: 'smooth',
  });
}

function clearPetList() {
  if (petListElem) petListElem.innerHTML = '';
}

// відображення всього списку категорій
export async function renderCategories() {
  if (!categoriesElem) return;
  try {
    // читання з АРІ об'єкту categiriesData
    const categoriesData = (await getCategories()) ?? [];
    // рендер вмісту categiriesData
    const categoriesMarkup = categoriesData
      .map(
        cat =>
          `<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${cat._id}"
            >
                ${cat.name}
            </button>`
      )
      .join('');
    categoriesElem.innerHTML = `<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${categoriesMarkup}`;
  } catch {
    // обробка помилки
    alert('Помилка завантаження категорій хвостиків');
  }
}

function renderPetList(items) {
  const petListItems = (items ?? [])
    .map(
      item => `
      <li class="pet-list-card-item" data-id="${item._id}">
        <img class="pet-list-card-img" src="${item.image}" alt="${item.name}" />

        <p class="pet-list-card-type">${item.species}</p>
        <p class="pet-list-card-name">${item.name}</p>

        <ul class="pet-list-card-filter">
          ${(item.categories ?? [])
            .map(
              cat => `<li class="pet-list-card-filter-item">${cat.name}</li>`
            )
            .join('')}
        </ul>

        <div class="pet-list-card-age-gender">
          <p class="pet-list-card-age">${item.age}</p>
          <p class="pet-list-card-gender">${item.gender}</p>
        </div>

        <p class="pet-list-card-about">${item.shortDescription}</p>

        <button type="button" class="pet-list-card-more-btn">
          Дізнатись більше
        </button>
      </li>
    `
    )
    .join('');
  if (petListElem) {
    petListElem.insertAdjacentHTML('beforeend', petListItems);
  }
}

export async function startPetList(category) {
  console.log('startPetList', category);
  categoryId = category;
  curPage = 1;
  countCards = checkCountCards();
  hideLoadMoreButton();
  showLoader();
  clearPetList();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    if (items.animals.length === 0) {
      alert('Більше нема даних');
      return;
    }
    countPages = Math.ceil(items.totalItems / countCards);
    renderPetList(items.animals);
    checkMoreButton();
    const cardItem = document.querySelector('.pet-list-card-item');
    if (cardItem) {
      heightCard = cardItem.getBoundingClientRect().height;
    } else {
      heightCard = 0;
    }
  } catch (error) {
    // console.error(error);
    alert('Помилка завантаження карток тваринок');
  } finally {
    hideLoader();
  }
}

async function continuePetList() {
  console.log('continuePetList');
  curPage += 1;
  countCards = checkCountCards();
  hideLoadMoreButton();
  showLoader();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    renderPetList(items.animals);
    scrollCards(1);
    checkMoreButton();
  } catch (error) {
    // console.error(error);
    alert('Помилка завантаження карток тваринок');
  }
  hideLoader();
}

function onCategoriesClick(event) {
  const btn = event.target.closest('.pet-list-categories-btn');
  if (!btn) return;
  const activeElem = categoriesElem.querySelector('.active');
  if (activeElem) activeElem.classList.remove('active');
  btn.classList.add('active');
  const id = btn.dataset.id;
  startPetList(id);
}

function onMoreBtnClick() {
  continuePetList();
}

function onCardClick(event) {
  const btn = event.target.closest('.pet-list-card-more-btn');
  if (!btn) return;
  const id = btn.dataset.id;
}
