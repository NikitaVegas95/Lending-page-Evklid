let burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    // menuLinks = document.querySelector('.header__nav-link'),
    burgerLine = document.querySelector('.burger__line'),
    headerNavList = document.querySelector('.header__nav-list-js'),
    headerBtnIcon = document.querySelector('.header__btn-icon'),
    inputWrapper = document.querySelector('.search-input__wrapper-js'),
    searchInputBtn = document.querySelector('.search-input__btn'),
    searchInput = document.querySelector('.search-input');

let ul = document.querySelector('ul');
let liArray = ul.querySelectorAll('li');
let button = document.querySelector('button');


  burger.addEventListener('click',

    function burgerMenu () {

      burger.classList.toggle('burger--active');

      menu.classList.toggle('open');

      headerNavList.classList.toggle('header__nav-list');

      burgerLine.classList.toggle('burger__line--active');

      document.body.classList.toggle('stop-scroll');

    });

  headerBtnIcon.addEventListener('click',

    function () {

      inputWrapper.classList.add('search-input__wrapper');

      searchInputBtn.classList.add('search-input_display');

      searchInput.classList.add('search-input_display');

    });

  searchInputBtn.addEventListener('click',

    function () {

      inputWrapper.classList.remove('search-input__wrapper');

      searchInputBtn.classList.remove('search-input_display');

      searchInput.classList.remove('search-input_display');

    });

  button.addEventListener('click',

    function () {

      for (let li of liArray) {

        li.classList.toggle('header__nav-item_margin-bottom');

        document.body.classList.toggle('stop-scroll');

      }

    });
