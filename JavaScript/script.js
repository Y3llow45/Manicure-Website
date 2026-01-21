const select = document.getElementById('categorySelect');
const cards = Array.from(document.querySelectorAll('.product-card'));
const grid = document.getElementById('productsGrid');
const noEl = document.createElement('p');
noEl.id = 'noResults';
noEl.textContent = 'No products found';
noEl.style.display = 'none';
noEl.style.textAlign = 'center';
noEl.style.padding = '20px';
grid.parentNode.insertBefore(noEl, grid.nextSibling);

function filterByCategory() {
  const val = select.value;
  let visible = 0;
  cards.forEach(card => {
    const cat = card.dataset.category;
    if (val === 'all' || cat === val) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });
  noEl.style.display = visible ? 'none' : '';
}

select.addEventListener('change', filterByCategory);
window.addEventListener('load', filterByCategory);
