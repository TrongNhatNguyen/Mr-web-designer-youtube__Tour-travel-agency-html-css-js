/* Ẩn Menu - Khung Search khi cuộn - header */
window.onscroll = () => {
    setTimeout(() => {
        searchBtn.classList.remove('fa-times');
        searchForm.classList.remove('active');

        menuBarBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    }, 200);
};

/*------------------------------------------------
    Hiển thị Menu dọc khi ở Điện Thoại - header
-------------------------------------------------*/
let menuBarBtn = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menuBarBtn.addEventListener('click', () => {
    menuBarBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

/*------------------------------------------------
    Hiển thị Thanh tìm kiếm khi nhấn icon - header
-------------------------------------------------*/
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
});

/*------------------------------------------------
    Hiển thị LOGIN khi nhấn icon - header
-------------------------------------------------*/
let loginBtn = document.querySelector('#user-btn');
let formCloseBtn = document.querySelector('#form-close-btn');
let loginForm = document.querySelector('.login-container');
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});
formCloseBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

/* hiển thị password ở login */
function toggleShowPassword() {
    let showPassBtn = document.querySelector('.show-pass');
    var x = document.getElementById('password');
    showPassBtn.classList.toggle('fa-eye');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

/*------------------------------------------------
    Chuyển video nền khi bấm bút - Home
-------------------------------------------------*/
let videoBtn = document.querySelectorAll('.video-btn');
let videoSlider = document.querySelector('#video-slider');
// Dò tất cả các class: video-btn:
videoBtn.forEach((btn) => {
    // Tìm class đã click:
    btn.addEventListener('click', () => {
        // xoá class: active có sẵn và thêm vào cái vừa click:
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        // lấy attr src ở nút đã click và nạp vào video:
        let src = btn.getAttribute('data-src');
        videoSlider.src = src;
    });
});
