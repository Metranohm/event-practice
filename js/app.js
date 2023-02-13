const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

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