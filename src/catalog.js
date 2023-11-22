import './styles/style.scss';

// открыть-закрыть popupMenu Filters
const catalogPage = document.getElementById('catalog-page');

if (catalogPage) {

const buttonOpenFiltersPopup = document.querySelector('.filters-btn');
const popupFilters = document.querySelector('.popup_filters');
const buttonCloseFiltersPopup = document.querySelector('.popup-close-btn');

buttonOpenFiltersPopup.addEventListener('click', function() {
  popupFilters.classList.toggle('popup_active');
  // buttonOpenBurger.classList.toggle('burger__open_rotated');
})
if (buttonCloseFiltersPopup) buttonCloseFiltersPopup.addEventListener('click', function () {
  popupFilters.classList.toggle('popup_active');
})

// карусель каталога товаров
// заполнение каталога
const catlogArray = [ 
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  }, {
    img:'https://images.unsplash.com/photo-1638609927093-fc8ac17d3295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
  {
    img:'https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  }, 
  {
    img:'https://images.unsplash.com/photo-1638609927093-fc8ac17d3295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80',
    product: 'High',
    price: 150,
    use: 'крем для лица',
    volume: '150 ml'
  },
]

const productTemplate = document.getElementById('product').content;
const catalogList = document.querySelector('.catalog__list');
let stepCatalog = 12;
let currentPageCatalog = 1;
const lastPageCatalog = Math.ceil(catlogArray.length/stepCatalog);
const catalogPrevBtn = document.getElementById('catalog-btn-prev');
const catalogNextBtn = document.getElementById('catalog-btn-next');
const catalogUIcurrentPage = document.querySelector('.catalog__current-page');
const catalogUIallCountPages = document.querySelector('.catalog__all-count-pages');

renderNewPage(currentPageCatalog);

function renderNewPage(page) {
  const cleanPage = document.querySelectorAll('.catalog__product-card');
  if (cleanPage) {
    for (let i=0; i<cleanPage.length; i++) {cleanPage[i].remove();}
  }
  for ( let i = (page - 1) * stepCatalog; i < Math.min(page * stepCatalog, catlogArray.length); i++) {
    const productElement = productTemplate.querySelector('.catalog__product-card').cloneNode(true);
    productElement.querySelector('.catalog__product-img').src = catlogArray[i].img;
    productElement.querySelector('.catalog__product-name').textContent = catlogArray[i].product;
    productElement.querySelector('.catalog__product-price').textContent = catlogArray[i].price + ' P';
    productElement.querySelector('.catalog__product-use').textContent = catlogArray[i].use;
    productElement.querySelector('.catalog__product-volume').textContent = catlogArray[i].volume;
    catalogList.append(productElement);
  }
  catalogUIcurrentPage.textContent = currentPageCatalog;
  catalogUIallCountPages.textContent = lastPageCatalog;
}

function disabledCatalogButtons(page) {
  if (page === 1 && !catalogPrevBtn.hasAttribute('disabled')) {
    catalogPrevBtn.setAttribute('disabled', true)
  } else if (page !== 1 && catalogPrevBtn.hasAttribute('disabled')) {
    catalogPrevBtn.removeAttribute('disabled')
  } 
  if (page === lastPageCatalog && !catalogNextBtn.hasAttribute('disabled')) {
    catalogNextBtn.setAttribute('disabled', true)
  } else if (page !== lastPageCatalog && catalogNextBtn.hasAttribute('disabled')) {
    catalogNextBtn.removeAttribute('disabled')
  } 
}

catalogPrevBtn.addEventListener('click', function() {
  currentPageCatalog--;
  if (currentPageCatalog <= 1) {
    currentPageCatalog = 1;
    renderNewPage(currentPageCatalog);
    disabledCatalogButtons(currentPageCatalog);
  } else {
    renderNewPage(currentPageCatalog);
    disabledCatalogButtons(currentPageCatalog);
  }
})

catalogNextBtn.addEventListener('click', function() {
  currentPageCatalog++;
  if (currentPageCatalog >= lastPageCatalog) {
    currentPageCatalog = lastPageCatalog;
    renderNewPage(currentPageCatalog);
    disabledCatalogButtons(currentPageCatalog);
  } else {
    renderNewPage(currentPageCatalog);
    disabledCatalogButtons(currentPageCatalog);
  }
})

// карусель секции - вы уже смотрели
// заполнение и управление
let width = document.documentElement.clientWidth;
let stepHaveSeenCarusel = (width < 700 ? 1 : 4);
let lastPageHaveSeenCarusel = (stepHaveSeenCarusel === 1 ? catlogArray.length : Math.ceil(catlogArray.length/stepHaveSeenCarusel));
const haveSeenTemplate = document.getElementById('have-seen-template').content;
const haveSeenList = document.querySelector('.have-seen__list');
window.addEventListener('resize', function() {
  width = document.documentElement.clientWidth;
  stepHaveSeenCarusel = (width < 700 ? 1 : 4);
  lastPageHaveSeenCarusel = (stepHaveSeenCarusel === 1 ? catlogArray.length : Math.ceil(catlogArray.length/stepHaveSeenCarusel));
  renderNewPageHaveSeen(currentaveSeenCarusel);
})

let currentaveSeenCarusel = 1;

const haveSeenPrevBtn = document.getElementById('have-seen-btn-prev');
const haveSeenNextBtn = document.getElementById('have-seen-btn-next');
const haveSeenUIcurrentPage = document.querySelector('.have-seen__current-page');
const haveSeenUIallCountPages = document.querySelector('.have-seen__all-count-pages');

renderNewPageHaveSeen(currentaveSeenCarusel);

function renderNewPageHaveSeen(page) {
  if (currentaveSeenCarusel > lastPageHaveSeenCarusel) {
    currentaveSeenCarusel =lastPageHaveSeenCarusel;
  }
  const cleanPage = document.querySelectorAll('.have-seen__product-card');
  if (cleanPage) {
    for (let i=0; i<cleanPage.length; i++) {cleanPage[i].remove();}
  }
  for ( let i = (page - 1) * stepHaveSeenCarusel; i < Math.min(page * stepHaveSeenCarusel, catlogArray.length); i++) {
    const haveSeenElement = haveSeenTemplate.querySelector('.have-seen__product-card').cloneNode(true);
    haveSeenElement.querySelector('.catalog__product-img').src = catlogArray[i].img;
    haveSeenElement.querySelector('.catalog__product-name').textContent = catlogArray[i].product;
    haveSeenElement.querySelector('.catalog__product-price').textContent = catlogArray[i].price + ' P';
    haveSeenElement.querySelector('.catalog__product-use').textContent = catlogArray[i].use;
    haveSeenElement.querySelector('.catalog__product-volume').textContent = catlogArray[i].volume;
    haveSeenList.append(haveSeenElement);
  }
  haveSeenUIcurrentPage.textContent = currentaveSeenCarusel;
  haveSeenUIallCountPages.textContent = lastPageHaveSeenCarusel;
  disabledHaveSeenButtons(currentaveSeenCarusel);
}

function disabledHaveSeenButtons(page) {
  if (page === 1 && !haveSeenPrevBtn.hasAttribute('disabled')) {
    haveSeenPrevBtn.setAttribute('disabled', true)
  } else if (page !== 1 && haveSeenPrevBtn.hasAttribute('disabled')) {
    haveSeenPrevBtn.removeAttribute('disabled')
  } 
  if (page === lastPageHaveSeenCarusel && !haveSeenNextBtn.hasAttribute('disabled')) {
    haveSeenNextBtn.setAttribute('disabled', true)
  } else if (page !== lastPageHaveSeenCarusel && haveSeenNextBtn.hasAttribute('disabled')) {
    haveSeenNextBtn.removeAttribute('disabled')
  } 
}

haveSeenPrevBtn.addEventListener('click', function() {
  currentaveSeenCarusel--;
  if (currentaveSeenCarusel <= 1) {
    currentaveSeenCarusel = 1;
    renderNewPageHaveSeen(currentaveSeenCarusel);
    disabledHaveSeenButtons(currentaveSeenCarusel);
  } else {
    renderNewPageHaveSeen(currentaveSeenCarusel);
    disabledHaveSeenButtons(currentaveSeenCarusel);
  }
})

haveSeenNextBtn.addEventListener('click', function() {
  currentaveSeenCarusel++;
  if (currentaveSeenCarusel >= lastPageHaveSeenCarusel) {
    currentaveSeenCarusel = lastPageHaveSeenCarusel;
    renderNewPageHaveSeen(currentaveSeenCarusel);
    disabledHaveSeenButtons(currentaveSeenCarusel);
  } else {
    renderNewPageHaveSeen(currentaveSeenCarusel);
    disabledHaveSeenButtons(currentaveSeenCarusel);
  }
})

// open-close checkboxex
const filtersOpenFaceOptBtn = document.getElementById('filters_open_checkbox-face');
const filtersFaceOpt = document.getElementById('filters_checkbox-face');

if (filtersOpenFaceOptBtn) filtersOpenFaceOptBtn.addEventListener('click', function(e) {
  e.preventDefault();
  filtersOpenFaceOptBtn.classList.toggle('product-card__button_rotated');
  filtersFaceOpt.classList.toggle('filters__group-container_on');
  filtersFaceOpt.classList.toggle('filters__group-container_off');
})

const filtersOpenBodyOptBtn = document.getElementById('filters_open_checkbox-body');
const filtersBodyOpt = document.getElementById('filters_checkbox-body');

filtersOpenBodyOptBtn.addEventListener('click', function(e) {
  e.preventDefault();
  filtersOpenBodyOptBtn.classList.toggle('product-card__button_rotated');
  filtersBodyOpt.classList.toggle('filters__group-container_on');
})

const filtersOpenSkinOptBtn = document.getElementById('filters_open_checkbox-skin');
const filtersSkinOpt = document.getElementById('filters_checkbox-skin');

filtersOpenSkinOptBtn.addEventListener('click', function(e) {
  e.preventDefault();
  filtersOpenSkinOptBtn.classList.toggle('product-card__button_rotated');
  filtersSkinOpt.classList.toggle('filters__group-container_on');
})

}
