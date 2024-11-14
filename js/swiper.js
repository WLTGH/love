var swiper = new Swiper('.swiper-container-lovezr1', {
    pagination: '.swiper-pagination-lovezr1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovezr2', {
    pagination: '.swiper-pagination-lovezr2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovezr3', {
    pagination: '.swiper-pagination-lovezr3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovezr3',
    prevButton: '.swiper-button-prev-lovezr3'
});