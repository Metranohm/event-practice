const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', (evt)=>{
  //create <li> element
  //access the text from the input
  //append the text to the <li>
  //add the <li> (with the text included) to HTML
  const li = document.createElement('li');
  li.textContent = input.value
  document.querySelector('ul').appendChild(li);


})