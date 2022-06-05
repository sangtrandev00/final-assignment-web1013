function showAuthors() {

    const testimonialContainer = document.querySelector('.page-testimominal__container');
    if(!testimonialContainer) return;

    const testimonialAuthors =Array.from(testimonialContainer.querySelectorAll('.page-testimominal__avatar-author-img')) ;
    
    console.log(testimonialAuthors);
    testimonialAuthors.forEach((author) => {
        author.addEventListener('click', () => {
            console.log(author)
            
            // remove all active img
            testimonialAuthors.forEach((author) => {
                author.classList.remove('page-testimominal__avatar-author-img--active');
            })

            author.classList.toggle('page-testimominal__avatar-author-img--active');
        })
    })
}


function showQuotes() {
    const testimonialContainer = document.querySelector('.page-testimominal__container');
    const testimonialFeedbacks = document.querySelector('.page-testimominal__feedbacks');
    const testimonialAuthorFeedbacks = document.querySelector('.page-testimominal__feedbacks-author');
    if(!testimonialContainer) return;
    if(!testimonialFeedbacks) return;

    // console.log(testimonialFeedbacks)

    const testimonialAuthors =Array.from(testimonialContainer.querySelectorAll('.page-testimominal__avatar-author-img')) ;
    const testimonialContents = Array.from(testimonialFeedbacks.querySelectorAll('.page-testimominal__feedbacks-content-item '));
    const testimonialAuthorNames = Array.from(testimonialAuthorFeedbacks.querySelectorAll('.page-testimominal__feedbacks-author-item'));
    console.log(testimonialAuthorNames);
    // console.log(testimonialContents)
    testimonialAuthors.forEach((author,index,array) => {
        author.addEventListener('click', () => {
            console.log(testimonialContents[index]);
            // delete all class display none -- section content
            testimonialContents.forEach((content) => {
                content.classList.remove('display-none');
            })
            // add all class display none
            testimonialContents.forEach((content) => {
                content.classList.add('display-none');
            })
            testimonialContents[index].classList.remove('display-none');


            // delete all class display none for author names -- section bottom
            testimonialAuthorNames.forEach((author) => {
                author.classList.remove('display-none');
            })

            testimonialAuthorNames.forEach((author) => {
                author.classList.add('display-none');
            })

            testimonialAuthorNames[index].classList.remove('display-none');



            // console.log(testimonialAuthorNames[index]);
            
        })
    })


}


(() => {
    showAuthors();
    showQuotes();
})();