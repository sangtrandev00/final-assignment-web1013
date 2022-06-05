
var faqItemTitleWrappers = document.querySelectorAll('.faq-content__section-item-title-wrapper');
for(index of faqItemTitleWrappers) {
    index.addEventListener('click', function() {
        // console.log(this.childNodes[1]);
        this.childNodes[1].classList.toggle('display-none');
        this.childNodes[3].classList.toggle('display-none');
        this.nextElementSibling.classList.toggle('display-none');
        
    })
}

