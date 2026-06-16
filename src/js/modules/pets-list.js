import { getCategories, getCategory } from '../api/api-categories';
import Swal from 'sweetalert2';

let curPage = 1;
let countPages = 1;
let countCards = 8;
let categoryId = 'all';
let heightCard = 0;
let paginIdx = 0;

const categoriesElem = document.querySelector('.pet-list-categories');
const petListElem = document.querySelector('.pet-list-cards');
const moreBtn = document.querySelector('.pet-list-more-btn');
const paginBox = document.querySelector('.pet-list-pagin');
const loader = document.querySelector('.loader');

if (categoriesElem) categoriesElem.addEventListener('click', onCategoriesClick);
if (moreBtn) moreBtn.addEventListener('click', onMoreBtnClick);
if (paginBox) paginBox.addEventListener('click', onPaginBtnClick);

function errorMsg(msg) {
  Swal.fire({ icon: 'error', title: msg });
}

function infoMsg(msg) {
  Swal.fire({ title: msg });
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

function showPaginBox(count) {
  if (paginBox) {
    let markup = `<button type="button" class="pet-list-pagin-btn left disabled">
        <svg width="24" height="24">
          <use href="${import.meta.env.BASE_URL}sprite.svg#icon-arrow_left"></use>
          
        </svg>
      </button>`;
    let i = 1;
    while (i <= count && i <= 3) {
      markup += `<button type="button" class="pet-list-pagin-num 
      ${i === 1 ? ' active' : ''}" data-idx="${i - 1}">${i}</button>`;
      i++;
    }
    if (count > 3) {
      markup += `<span class="pet-list-pagin-dot">...</span>
        <button type="button" class="pet-list-pagin-num" data-idx="3">${count}</button>`;
    }
    markup += `<button type="button" class="pet-list-pagin-btn right 
      ${count <= 1 ? 'disabled' : ''}">
        <svg width="24" height="24">
          <use href="${import.meta.env.BASE_URL}sprite.svg#icon-arrow_right"></use>
        </svg>
      </button>`;
    paginBox.innerHTML = markup;
    paginBox.classList.remove('hidden');
  }
}

function hidePaginBox() {
  if (paginBox) {
    paginBox.classList.add('hidden');
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

function checkCountCards() {
  return window.innerWidth < 1366 ? 8 : 9;
}

function checkMoreButton() {
  if (curPage < countPages) {
    showLoadMoreButton();
  } else {
    infoMsg('В базі даних більше нема карток');
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
                class="pet-list-categories-btn" aria-label="${cat.name}"
                data-id="${cat._id}"
            >
                ${cat.name}
            </button>`
      )
      .join('');
    categoriesElem.innerHTML = `<button
            type="button"
            class="pet-list-categories-btn active" aria-label="Всі категорії"
            data-id="all"
        >
            Всі
        </button>
        ${categoriesMarkup}`;
  } catch {
    // обробка помилки
    errorMsg('Помилка завантаження категорій хвостиків');
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

        <button type="button" class="pet-list-card-more-btn" aria-label="Дізнатись більше про ${item.name}">
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
  categoryId = category;
  curPage = 1;
  countCards = checkCountCards();
  hideLoadMoreButton();
  hidePaginBox();
  showLoader();
  clearPetList();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    if (items.animals.length === 0) {
      infoMsg('В базі даних нема карток за цією категорією');
      return;
    }
    countPages = Math.ceil(items.totalItems / countCards);
    renderPetList(items.animals);
    if (countCards === 8) {
      checkMoreButton();
    } else {
      showPaginBox(countPages);
    }
    const cardItem = document.querySelector('.pet-list-card-item');
    if (cardItem) {
      heightCard = cardItem.getBoundingClientRect().height;
    } else {
      heightCard = 0;
    }
  } catch (error) {
    errorMsg('Помилка завантаження карток тваринок');
  } finally {
    hideLoader();
  }
}

async function continuePetList() {
  if (countCards === 8) curPage += 1;
  hideLoadMoreButton();
  showLoader();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    renderPetList(items.animals);
    if (countCards === 8) {
      scrollCards(1);
      checkMoreButton();
    }
  } catch (error) {
    errorMsg('Помилка завантаження карток тваринок');
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

function onPaginBtnClick(event) {
  const cp = curPage;
  const t = event.target.closest('button');
  if (!t) return;
  const left = paginBox.querySelector('.pet-list-pagin-btn.left');
  const right = paginBox.querySelector('.pet-list-pagin-btn.right');
  const abtn = paginBox.querySelector('.pet-list-pagin-num.active');
  const btn = paginBox.querySelectorAll('.pet-list-pagin-num');
  // остання сторінка
  if (t === btn[btn.length - 1]) {
    curPage = Number(t.textContent);
    paginIdx = btn.length - 1;
    if (curPage > 3) {
      btn[2].textContent = curPage - 1;
      btn[1].textContent = curPage - 2;
      btn[0].textContent = curPage - 3;
    }
  }
  if (t.classList.contains('left')) {
    curPage -= 1;
    if (curPage === 1) {
      left.classList.add('disabled');
    } else {
      left.classList.remove('disabled');
    }
    right.classList.remove('disabled');
    if (paginIdx > 0) {
      btn[paginIdx].classList.remove('active');
      paginIdx--;
      btn[paginIdx].classList.add('active');
    } else {
      btn[0].textContent = curPage;
      btn[1].textContent = curPage + 1;
      btn[2].textContent = curPage + 2;
    }
  } else if (t.classList.contains('right')) {
    curPage += 1;
    if (curPage === countPages) {
      right.classList.add('disabled');
    } else {
      right.classList.remove('disabled');
    }
    left.classList.remove('disabled');
    if (paginIdx < 2 || curPage === countPages) {
      btn[paginIdx].classList.remove('active');
      paginIdx++;
      btn[paginIdx].classList.add('active');
    } else {
      btn[2].textContent = curPage;
      btn[1].textContent = curPage - 1;
      btn[0].textContent = curPage - 2;
    }
  } else {
    if (t !== abtn) {
      abtn.classList.remove('active');
      t.classList.add('active');
      curPage = Number(t.textContent);
      if (curPage > 1) {
        left.classList.remove('disabled');
      } else {
        left.classList.add('disabled');
      }
      if (curPage != countPages) {
        right.classList.remove('disabled');
      } else {
        right.classList.add('disabled');
      }
      paginIdx = t.dataset.idx;
    }
  }
  if (cp !== curPage) {
    clearPetList();
    continuePetList();
    petListElem.scrollIntoView({ behavior: 'smooth' });
  }
}
