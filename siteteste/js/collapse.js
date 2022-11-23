function menuShow() {
    let but1 = documet.querySelector('navbarNav')
    if (but1.classList.contains('open')) {
        but1.classList.remove('open');
    } else {
        but1.classList.add('open');
    }
}

// $(".nav-button").click(function () {
//     $(".nav-button,.primary-nav").toggleClass("open");
// });  

// $(".scroll-link").click(function () 
//     $(".nav-button,.primary-nav").toggleClass("close");
// });