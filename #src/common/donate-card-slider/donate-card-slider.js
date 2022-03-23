{
    let donateCardSlider = document.querySelector('[data-donate-card-slider]');
    if(donateCardSlider) {
        let swiperDonateCardSlider = new Swiper(donateCardSlider.querySelector('.swiper'), {
            
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            initialSlide: 2,
            loop: true,
            navigation: {
                nextEl: donateCardSlider.querySelector('.donate-card-slider__btn-right'),
                prevEl: donateCardSlider.querySelector('.donate-card-slider__btn-left'),
            },
        });
    }
}