'use strict';

const FEEDBACK_DATA_KEY = 'feedback-form-state';
const form = document.querySelector('form');

let getData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

if (getData) {
  form.elements.email.value = getData.email;
  form.elements.message.value = getData.message;
}

const eventInput = () => {
  const inputData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(inputData));
};

const eventSubmit = event => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Заповніть всі поля форми!');
    return;
  } else {
    const data = {
      email: emailValue,
      message: messageValue,
    };
    console.log(data);
  }

  localStorage.removeItem(FEEDBACK_DATA_KEY);
  form.reset();
};

form.addEventListener('input', eventInput);
form.addEventListener('submit', eventSubmit);
