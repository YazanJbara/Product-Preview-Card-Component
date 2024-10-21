const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const product = document.querySelector('.product');
const productSecond = document.querySelector('.product.second');

// Initial display states
product.style.display = 'grid';
productSecond.style.display = 'none';

prevBtn.addEventListener('click', () => {
  product.style.display = 'none';
  productSecond.style.display = 'grid';
});

nextBtn.addEventListener('click', () => {
  productSecond.style.display = 'grid'; // Show the second product
  product.style.display = 'none'; // Hide the first product
});
