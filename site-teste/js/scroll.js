$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 60)
        {
            $('#navbar').addClass('.active');
        } else {
            $('#navbar').removeClass('.active');  
        }
    });
});