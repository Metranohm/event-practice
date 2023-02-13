const btn = document.querySelector('button');
const reset-btn = document.querySelector('reset-btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const calendar = document.querySelector('.calendar');

btn.addEventListener('click', (evt)=>{
  const li = document.createElement('li');
  li.textContent = input.value;
  document.querySelector('ul').appendChild(li);
  input.value = '';
});

ul.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'LI') {
    ul.removeChild(evt.target);
  }
});

calendar.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'LI') {
    calendar.removeChild(evt.target);
  }
});

reset-btn.addEventListener('click', (evt) => {
  ul.innerHTML = '';
});
