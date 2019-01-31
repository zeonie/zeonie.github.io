$(document).ready(function(){
    $('.hamburger').on('click', function(){
        if ($(this).hasClass('show')){
            $(this).removeClass('show');
            $('nav ul').slideToggle();
            $('html,body').css('overflow','auto')
        } else {
            $(this).addClass('show');
            $('nav ul').slideToggle();
            $('html,body').css('overflow','hidden')
        }
    });
});