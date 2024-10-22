const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const product = document.querySelector('.product');
const productSecond = document.querySelector('.product.second');

// Initial display states
product.style.display = 'grid';
productSecond.style.display = 'none';

function tog() {
  console.log(product.style.display);
  if (product.style.display == 'none') {
    product.style.display = 'grid';
    productSecond.style.display = 'none';
  } else {
    product.style.display = 'none';
    productSecond.style.display = 'grid';
  }
}
