document.getElementById('box').addEventListener('click', (event) => {
  event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
});

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  window.alert('Form submitted!');
});

document.getElementById('text-input').addEventListener('input', (event) => {
  const elem = document.getElementById('output');
  elem.innerText = event.target.value;
});

document.getElementById('text').addEventListener('dblclick', (event) => {
  event.target.innerText = 'You double-clicked me!';
});

document.getElementById('tracking-area').addEventListener('mousemove', (event) => {
  const elem = document.getElementById('coordinates');
  elem.innerText = `Coordinates: (${event.clientX}, ${event.clientY})`;
});

document.getElementById('magic-button').addEventListener('mouseover', (event) => {
  event.target.innerText = 'Hovered!';
});

document.getElementById('magic-button').addEventListener('click', (event) => {
  event.target.innerText = 'Clicked!';
});

document.getElementById('magic-button').addEventListener('mouseleave', (event) => {
  event.target.innerText = 'Hover or Click me!';
});
