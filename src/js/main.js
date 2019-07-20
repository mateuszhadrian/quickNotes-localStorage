const loadButton = document.querySelector(".main__button--load-js");
const saveButton = document.querySelector(".main__button--save-js");
const clearButton = document.querySelector(".main__button--clear-js");
const textarea = document.querySelector(".main__textarea--js")

saveButton.addEventListener('click', (e) => {
  localStorage.setItem('text', textarea.value);
});

loadButton.addEventListener('click', (e) => {
  textarea.value = localStorage.getItem('text');
});

clearButton.addEventListener('click', (e) => {
  textarea.value = "";
});