// header
let header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute('style', 'background: rgba(255, 255, 255, 0.9);');
  } else {
    header.setAttribute('style', 'background:rgba(255, 255, 255, 0.3);');
  }
});

// nav

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

// ham

$('.ham').click(function () {
  $(this).toggleClass('active');
  $('.gnb').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $(this).toggleClass('on');
  $('.gnb').toggleClass('on');
});

// search

document.querySelector('.sear').addEventListener('click', () => {
  document.querySelector('.sear').classList.add('on');
  document.querySelector('.search_in').classList.add('on');
  document.querySelector('.exid').classList.add('on');
});
document.querySelector('.exid').addEventListener('click', () => {
  document.querySelector('.sear').classList.remove('on');
  document.querySelector('.search_in').classList.remove('on');
  document.querySelector('.exid').classList.remove('on');
});

// tab
$('.type').click(function () {
  let i = $(this).index();

  $('.type').removeClass('on');
  $(this).addClass('on');
  $('.item').eq(-1).prependTo('.inner');
});
