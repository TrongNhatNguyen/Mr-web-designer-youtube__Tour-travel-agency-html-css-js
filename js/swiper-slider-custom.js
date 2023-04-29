// =========================================
//    Trang Đánh giá - REVIEW
// =========================================
var swiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // ĐIỆN THOẠI DỌC MAX 180px -> 479px
        0: {
            slidesPerView: 1,
        },
        // ĐIỆN THOẠI NGANG MAX 480px -> 767px
        580: {
            slidesPerView: 2,
        },
        // ĐIỆN THOẠI NGANG MAX 768px -> 1023
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// =========================================
//    Trang Thương Hiệu - BRAND
// =========================================
var swiper = new Swiper('.brand-slider', {
    loop: true,
    spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // ĐIỆN THOẠI DỌC MAX 180px -> 479px
        0: {
            slidesPerView: 2,
        },
        // ĐIỆN THOẠI NGANG MAX 480px -> 767px
        580: {
            slidesPerView: 3,
        },
        // ĐIỆN THOẠI NGANG MAX 768px -> 1023
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
