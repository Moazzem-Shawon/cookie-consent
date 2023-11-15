const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalInner = document.querySelector('.modal-inner');
const consentForm = document.querySelector('.consent-form');
const acceptBtn = document.querySelector('.modal-choice-accept-btn');
const modalText = document.querySelector('.modal-text');
const modalInnerLoading = document.querySelector('.modal-inner-loading');
const declineBtn = document.querySelector('.modal-choice-decline-btn');
const modalBtns = document.querySelector('.modal-choice-btns');



function closeModal() {
  modal.style.display = 'none';
}

function showModal() {
  setTimeout(() => {
    modal.style.display = 'block';
  }, 1000)
}

window.addEventListener('load', showModal);
modalCloseBtn.addEventListener('click', closeModal);

consentForm.addEventListener('submit', e => {
  e.preventDefault();
  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img class="loadingImg" src="/images/loading.png" alt="">
      <p id="uploadText">
      Uploading your data to the dark web...
      </p>
    </div>
  `

  const formData = new FormData(consentForm);
  console.log(formData);
  const name = formData.get('fullName');

  setTimeout(() => {
    document.querySelector('#uploadText').textContent = "Making the sale...";
  }, 1500)

  setTimeout(() => {
    modalInner.innerHTML = `
      <h2 class="pirate-title">Thanks you ${name}! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-pirate">
          <img src="/images/pirate.jpg">
      </div>
    `
    consentForm.style.display = 'none';
    modalCloseBtn.disabled = false;
  }, 3000)
});

declineBtn.addEventListener('mouseenter', () => {
  modalBtns.classList.toggle("modal-choice-btn-reverse");
});

// acceptBtn.addEventListener('click', changeUI);