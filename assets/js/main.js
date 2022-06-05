
var topSearchBtn = document.querySelector('.top-header__search-icon');
var topSearchInput = document.querySelector('.top-header__search-input');
var topSearchInputSecond = document.querySelector('.bottom-header__navbar-search-second-icon');


var appearHeaderNav = document.querySelector('.bottom-header-wrap-second');
var topSearchInputSecondText = document.querySelector('.top-header__search-input-second');
var topSearchExit = document.querySelector('.bottom-header__navbar-exit-second-icon');


var widgetContactBtn = document.querySelector('.widget-layout__img-container');
var widgetForm = document.querySelector('.widget-form');
var widgetFormExitIcon = document.querySelector('.widget-form__exit-btn-icon');

var topSearchIcon = document.querySelector('.top-header__search-icon');
var topSearchInput = document.querySelector('.top-header__search-input');
var bottomRegisterTittle = document.querySelector('.bottom-register__title');
var bottomRegisterContainer = document.querySelector('.bottom-register__container');
var bottomRegisterExitIcon = document.querySelectorAll('.bottom-register-fix-exit-icon');
var bottomRegisterFix = document.querySelector('.bottom-register-fix');
var topMenuIconMobile = document.querySelectorAll('.bottom-header__vertical-mobile-menu-icon');
var topMenuMobileList = document.querySelectorAll('.js-bottom-header__navbar-list');
// console.log(topMenuMobileList[0]);
// console.log(topMenuMobileList[1]);



window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    if(scrolled > 170) {
        
       appearHeaderNav.style.display = 'block';
    }
    else {
        appearHeaderNav.style.display = 'none';
    }
})


topSearchIcon.addEventListener('click', function() {
    topSearchInput.classList.toggle('display-block');

})



topSearchInputSecond.addEventListener('click', function() {
    topSearchInputSecondText.classList.toggle('display-block');
})


// widget collapse and widget contact appear.
widgetContactBtn.addEventListener('click',function() {
    widgetForm.classList.add('display-block');
    widgetContactBtn.classList.add('display-none');
})

widgetFormExitIcon.addEventListener('click',function() {
    // console.log(widgetFormExitIcon);
    widgetForm.classList.remove('display-block');
    widgetContactBtn.classList.remove('display-none');
})


// bottom register title display

bottomRegisterTittle.addEventListener('click',function() {
    bottomRegisterContainer.classList.remove('display-none');
})

// bottom register title out

bottomRegisterExitIcon[1].addEventListener('click',function() {
    bottomRegisterContainer.classList.add('display-none');
})

bottomRegisterExitIcon[0].addEventListener('click',function() {
    bottomRegisterFix.classList.add('display-none');
})


// top menu toggle mobile ( tablet - mobile phone)

topMenuIconMobile[0].addEventListener('click',function() {
    // console.log(topMenuMobileList)
    // topMenuMobileList[0].classList.toggle('display-none-mobile');
    topMenuMobileList[0].classList.toggle('hide-on-mobile-tablet');
})

// topMenuIconMobile[1].addEventListener('click',function() {
//     // console.log(topMenuMobileList[1])
//     topMenuMobileList[1].classList.toggle('display-none-mobile');
// })




// special case
function disapearExit() {
    const bottomRegisterBox = document.getElementById('bottomRegister');
    const registerElement = document.getElementById('registerTitle');
    const exitRegisterElement = bottomRegisterBox.querySelector('.bottom-register-fix-exit-icon-left');

    registerElement.addEventListener('click',function() {
        exitRegisterElement.classList.add('display-none');
    })

    const exitRegisterForm = bottomRegisterBox.querySelector('.bottom-register-fix-exit-icon-right');
    if(!exitRegisterForm) return;
    exitRegisterForm.addEventListener('click',function() {
        exitRegisterElement.classList.remove('display-none');
    })

}



(() => {
    disapearExit();
    console.log('hello');
})()