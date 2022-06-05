



var topHeaderSearchIcon = document.querySelector('.top-header__search-icon');
var softwareNavItemBtns = document.querySelectorAll('.software-app__content-nav-item');
const softwareNavItemArr = Object.values(softwareNavItemBtns);

const softwareAppContentBodyItems = document.querySelectorAll('.software-app__content-body-wrapper');
const softwareAppContentBodyItemsArr = Object.values(softwareAppContentBodyItems);
console.log(softwareAppContentBodyItemsArr);
console.log(softwareNavItemBtns)
console.log(softwareNavItemArr)


topHeaderSearchIcon.addEventListener('click',function() {
    this.nextElementSibling.classList.toggle('display-none');
})


for(let i=0; i<softwareNavItemArr.length; i++) {
    softwareNavItemArr[i].addEventListener('click',function() {
        softwareNavItemArr.forEach((btn,index) => {
            btn.classList.remove('software-app__content-nav-item--current');
            this.classList.add('software-app__content-nav-item--current');
        });

        // console.log(this.parentElement.parentElement.parentElement.children[i + 1]);
        softwareAppContentBodyItemsArr.forEach((contentItem, i) => {
            contentItem.classList.add('display-none');
        })
        this.parentElement.parentElement.parentElement.children[i + 1].classList.toggle('display-none')
        // for(let i=0;i<softwareAppContentBodyItemsArr.length;i++) {
            
        // }
        
    })
}


// hoc xong bai tren f8 va on lai javascript roi lam menu nhu the nay.