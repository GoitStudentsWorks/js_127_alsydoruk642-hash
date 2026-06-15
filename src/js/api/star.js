myInput = document.querySelector('star');
myInput.addEventListener('keydown', onInput);

function onInput() {
  val = myIput.value;
  const star = renderStar(val);
  const box = document.querySelector('star-exp');
  box.innerHTML = star;
}

function renderStar(val) {
  //   const s = '';
  //   star = document.querySelector('star-exp');
  //   star.innerHTML = '';
  //   for (i = 0; i < 5; i++) {}
  const s = `<div class="rating">
    <div class="label-value">${val}</div>
    <div class="star-container">
      <div class="star">
        <i class="star-filled"></i>
      </div>
      <div class="star">
        <i class="star-half"></i>
      </div>
      <div class="star">
        <i class="star-empty"></i>
      </div>
    </div>
  </div>`;
  return s;
}
