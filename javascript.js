const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const panel = accordion.nextElementSibling;
    accordion.classList.toggle('active');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
// const image = document.getElementById('image');
// const menu = document.getElementById('menu');

// image.addEventListener('click', () => {
//   if (menu.style.display === 'block') {
//     menu.style.display = 'none';
//   } else {
//     menu.style.display = 'block';
//   }
// });