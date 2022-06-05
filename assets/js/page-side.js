
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

var topSearchEncrollIcon = document.querySelector('.top-header-page-encroll__search-icon');
var topSearchEncrollInput = document.querySelector('.top-header-page-encroll__search-input');


var topMenuEncrollIcon = document.querySelector('.top-header-page-encroll__right-navbar-menu-icon');
var topHeaderNavbarList =document.querySelector('.top-header-page-encroll__navbar-list');

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


var imgTestimonimalAvatar = document.querySelectorAll('.page-testimominal__avatar-author-img');
// console.log(imgTestimonimalAvatar);

// for(var index of imgTestimonimalAvatar) {
//    index.addEventListener('click',function() {
//     //    console.log(this)
//        this.classList.add('page-testimominal__avatar-author-img--active');
//        index.forEach(function() {
//            return  
//        })
//    })
// }


// top search encroll icon appear input

topSearchEncrollIcon.addEventListener('click',function() {
    console.log(topSearchEncrollIcon);
    topSearchEncrollInput.classList.toggle('display-block');

})

// top search encroll menu bar mobile
topMenuEncrollIcon.addEventListener('click',function() {
    topHeaderNavbarList.classList.toggle('display-block');
})
