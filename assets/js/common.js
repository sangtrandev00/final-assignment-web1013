
console.log('hello')

function renderScrollTopElement() {
    // how to render scroll top element.
    // that is a big story.

    const scrollTopDiv = document.createElement('div');
    scrollTopDiv.id = 'scrollTop';
    const scrollTopElement = document.getElementById('scrollTop');
    scrollTopElement.innerHTML = `<i class="fa-solid fa-chevron-up scroll-top-icon"></i>`;
}

function ScrollTop() {

    const crollTopElement = document.getElementById('scrollTop');


    window.addEventListener('scroll', function() {
        var scrolled = window.scrollY;
        if(scrolled > 170) {
            crollTopElement.classList.remove('display-none');
        //    appearHeaderNav.style.display = 'block';
        }
        else {
            crollTopElement.classList.add('display-none');
        }
    })

    crollTopElement.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}

function rederModal() {
    // how to render modal from the other page.
    // of course you can use css

    const modalDiv = document.createElement('div');
    modalDiv.id = 'modalSection';
    

    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML= `
    <div class="modal-section display-none" id="modalSection">
            <div class="modal__overlay">
                <div class="modal__container">
                    <div class="modal__img-container">
                        <img src="assets/img/modal-img/modal-banner-img.png" alt="" class="modal__img">
                    </div>
                    <div class="modal__form-container">
                        <div class="modal__form-exit">
                            <i class="fa-solid fa-circle-xmark modal__form-exit-icon"></i>
                        </div>
                        <h3 class="modal__title">Nhập thông tin</h3>
                        <form action="" class="modal__form">
                            <p class="modal__call-to-action">
                                Trường đã bắt đầu nhận hồ sơ 2022. Đăng ký xét học bạ THCS ngay!
                            </p>
                            <div class="modal__form-control">
                                <input type="text" name="" id="" class="modal__form-input modal__form-input-name"
                                    placeholder="Họ và tên">
                            </div>
                            <div class="modal__form-control">
                                <input type="text" name="" id="" class="modal__form-input modal__form-input-name"
                                    placeholder="Số điện thoại">
                            </div>
                            <div class="modal__form-control">
                                <input type="text" name="" id="" class="modal__form-input modal__form-input-name"
                                    placeholder="Thành phố (User)">
                            </div>
                            <button class="modal__form-btn">Đăng ký ngay</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
}

function clickModal() {
    const modalSection = document.getElementById('modalSection');
    const modalExitBtn = modalSection.querySelector('.modal__form-exit-icon');
    modalExitBtn.addEventListener('click', () => {
        modalSection.classList.toggle('display-none');
    })
}

function showModal() {
    setTimeout(() => {
        modalSection.classList.remove('display-none');
        console.log('hello world');
    }, 3000);



}


function preventDefaultATag() {
    const bottomHeaderNavLinkElements = document.querySelectorAll('.bottom-header__navbar-link');
    const bottomHeaderNavLinkElementList = Array.from(bottomHeaderNavLinkElements);
    bottomHeaderNavLinkElementList.forEach((itemLink) => {
        itemLink.addEventListener('click',(e) => {
            e.preventDefault();
        })
    })
    // console.log(bottomHeaderNavLinkElementList)


    const bottomHeaderDropdownElements = document.querySelectorAll('.bottom-header__dropdown-link');
    const bottomHeaderDropdownElementList = Array.from(bottomHeaderDropdownElements);
    bottomHeaderDropdownElementList.forEach((itemDropdown) => {
        itemDropdown.addEventListener('click',(e) => {
            e.preventDefault();
        })
    })
}



(() => {
    rederModal();
    showModal();
    clickModal();
    renderScrollTopElement();
    ScrollTop();
    preventDefaultATag();
})()