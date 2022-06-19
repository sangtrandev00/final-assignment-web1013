
function changeTabsContact() {
    const $ = document.querySelector.bind(document);

    const contactLocationBtns = document.querySelectorAll('.contact-fpt__nav-item');
    // console.log(contactLocationBtns);
    
    const contactSectionWrap = document.querySelectorAll('.contact-fpt__location-traning-section');
    const contactSectionWrapArr = Object.values(contactSectionWrap);
    
    const contactLocationBtnsArr = Object.values(contactLocationBtns);
    // console.log(contactLocationBtnsArr);
    
    contactLocationBtnsArr.forEach((placement, index) => {
        placement.addEventListener('click', (e) => {
            // console.log(index);
            // console.log(placement.firstElementChild)
            // console.log($('.contact-fpt__nav-link.contact-fpt__nav-link--current'));
            $('.contact-fpt__nav-link.contact-fpt__nav-link--current').classList.remove('contact-fpt__nav-link--current');
    
            placement.firstElementChild.classList.add('contact-fpt__nav-link--current');
    
            contactSectionWrapArr.forEach(sectionPlacement => {
                sectionPlacement.classList.add('display-none');
            })
    
            placement.parentElement.parentElement.nextElementSibling.children[index].classList.toggle('display-none');
            
            // window.scrollY = 500;
            // document.documentElement.scrollTop = 533;
        })
    })
    
}



(() => {
    changeTabsContact();
})()