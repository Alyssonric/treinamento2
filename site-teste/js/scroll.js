$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 30) {
            $('.nav-link').removeClass('text-light');
            $('.nav-link').addClass('text-dark');
            $('#menu').addClass('active');
        } else {
            $('#menu').removeClass('active');
            $('.nav-link').addClass('text-light');
            $('.nav-link').removeClass('text-dark');
        }
    });
});