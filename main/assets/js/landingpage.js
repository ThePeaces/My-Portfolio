const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// loader nw
window.addEventListener('load', () => {
  const pageLoader = document.querySelector('.page-loader');
  if (pageLoader) {
      pageLoader.classList.add('fade');
      pageLoader.addEventListener('transitionend', () => {
          pageLoader.style.display = 'none';
      });
  }
});