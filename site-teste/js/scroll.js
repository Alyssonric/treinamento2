$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10)
        {
            $('#navbar').addClass('.active');
        } else {
            $('#navbar').removeClass('.active');  
        }
    });
});

