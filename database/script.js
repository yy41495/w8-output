const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const form = document.querySelector('form');

window.addEventListener('load', () => {
  const savedEmail = localStorage.getItem('email');
  const savedPass = localStorage.getItem('pass');
  if (savedEmail) emailInput.value = savedEmail;
  if (savedPass) passInput.value = savedPass;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('pass', passInput.value);
});
