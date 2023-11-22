import './styles/style.scss';

const page = document.getElementById('product-card-page');

if (page) {

const buttonConsist = document.getElementById('product-card-open-consist');
const buttonUsing = document.getElementById('product-card-open-using');
const consistData = document.getElementById('product-card-consist');
const usingData = document.getElementById('product-card-using');

buttonConsist.addEventListener('click', function() {
  consistData.classList.toggle('product-card__added-info_opened');
  buttonConsist.classList.toggle('product-card__button_rotated');
});
buttonUsing.addEventListener('click', function() {
  usingData.classList.toggle('product-card__added-info_opened');
  buttonUsing.classList.toggle('product-card__button_rotated');
});

// карусель секции - вы уже смотрели
// заполнение и управление
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

}
