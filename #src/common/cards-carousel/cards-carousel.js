{
    let cardsCarousel = document.querySelector('[data-cards-carousel]');
    if (cardsCarousel) {
        let options = {
            slidesPerView: 'auto',
            spaceBetween: 35,
            speed: 800,
            initialSlide: 2,
            centeredSlides: true,
        }

        if(document.documentElement.clientWidth > 1267.98) {
            options = {
                ...options,
                touchRatio: 0,
            }
        }
        let swiperCardsCarousel = new Swiper(cardsCarousel, options);


        // cards hover
        let slides = cardsCarousel.querySelectorAll('.swiper-slide');
        if (slides.length) {
            slides.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    if(document.documentElement.clientWidth > 991.98) {
                        if (!card.classList.contains('swiper-slide-active')) {
                            let activeSlide = cardsCarousel.querySelector('.swiper-slide-active');
                            activeSlide.classList.add('card-hover-not');
                        }
    
                        card.classList.add('card-hover');
    
                        slides.forEach(i => {
                            if (i === card) return
    
                            i.classList.remove('card-hover');
                        })
                    }
                })

                card.addEventListener('mouseleave', () => {
                    if(document.documentElement.clientWidth > 991.98) {
                        let activeSlide = cardsCarousel.querySelector('.swiper-slide-active');
                        activeSlide.classList.remove('card-hover-not');
    
    
                        card.classList.remove('card-hover');
                    }
                })
            })
        }

    }
}