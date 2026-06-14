const closeBtn = document.querySelector('.app-modal-close');
const modal = document.querySelector('.backdrop');

const form = document.querySelector('.app-modal-form');
const button = document.querySelector('.modal-button');

const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const commentInput = document.querySelector('#comment');

const fields = document.querySelectorAll('.modal-field');

// функція відкривання модалки
// function openModal() {
//   modal.classList.remove('is-hidden');
//   document.body.classList.add('no-scroll');
// }

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function validateField(field, input) {
  const isValid = input.value.trim() !== '';

  if (isValid) {
    field.classList.remove('error');
  } else {
    field.classList.add('error');
  }

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

form.addEventListener('submit', e => {
  e.preventDefault();

  checkForm();

  if (button.disabled) {
    return;
  }

  form.reset();

  button.disabled = true;

  fields.forEach(field => {
    field.classList.remove('error');
  });
});
