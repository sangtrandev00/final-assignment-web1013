
var plusIconBtns = document.querySelectorAll('.content-enroll__titles-item-icon-plus');
var minuIconBtns = document.querySelectorAll('.content-enroll__titles-item-icon-minus');
var enrollTitleItemTexts = document.querySelectorAll('.content-enroll__titles-item-text');

console.log(enrollTitleItemTexts);
for(index of enrollTitleItemTexts) {
    index.addEventListener('click', function() { 
        this.classList.toggle('content-enroll__titles-item-text--border');
        this.nextElementSibling.classList.toggle('display-none');
        this.childNodes[1].classList.toggle('display-none');
        this.childNodes[3].classList.toggle('display-none');
    })
}

