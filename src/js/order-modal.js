import { createOrder } from './api/api-order.js';
import Swal from 'sweetalert2';

const closeBtn = document.querySelector('.app-modal-close');
const modal = document.querySelector('.backdrop');

const form = document.querySelector('.app-modal-form');
const button = document.querySelector('.modal-button');

const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const commentInput = document.querySelector('#comment');

const fields = document.querySelectorAll('.modal-field');

let selectedAnimalId = null;

export function setAnimalId(id) {
  selectedAnimalId = id;
}

export function openModal(animalId) {
  selectedAnimalId = animalId;

  form.reset();
  button.disabled = true;

  fields.forEach(f => f.classList.remove('error'));

  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function validateField(field, input) {
  const isValid = input.value.trim() !== '';
  field.classList.toggle('error', !isValid);
  return isValid;
}

function checkForm() {
  const nameValid = validateField(fields[0], nameInput);
  const phoneValid = validateField(fields[1], phoneInput);
  const commentValid = validateField(fields[2], commentInput);

  button.disabled = !(nameValid && phoneValid && commentValid);
}

nameInput.addEventListener('input', checkForm);
phoneInput.addEventListener('input', checkForm);
commentInput.addEventListener('input', checkForm);

form.addEventListener('submit', async e => {
  e.preventDefault();

  checkForm();

  if (button.disabled) return;

  const phone = phoneInput.value.trim();

  function isPhoneValid(phone) {
    return /^[0-9]{12}$/.test(phone);
  }

  if (!isPhoneValid(phone)) {
    Swal.fire({
      icon: 'error',
      title: 'Невірний номер',
      text: 'Телефон має містити 12 цифр без + і пробілів',
    });
    return;
  }

  const orderData = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    comment: commentInput.value.trim(),
    animalId: selectedAnimalId,
  };

  try {
    const result = await createOrder(orderData);

    Swal.fire({
      icon: 'success',
      title: 'Заявку відправлено!',
      text: `Ваш номер замовлення: ${result.orderNum}`,
      confirmButtonText: 'OK',
    });

    form.reset();
    button.disabled = true;
    fields.forEach(f => f.classList.remove('error'));
    closeModal();
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка!',
      text: 'Не вдалося відправити заявку',
      confirmButtonText: 'OK',
    });
  }
});
