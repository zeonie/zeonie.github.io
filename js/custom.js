function activeScroll(){
    var scrollTop = $(document).scrollTop();
    $("#nav a.scroll").each(function(){
        sectionName = $(this).attr("href");
        sectionPosition = $(sectionName).position().top - 100;
        sectionEnd = $(sectionName).position().top + $(sectionName).outerHeight();
        if ( sectionPosition <= scrollTop && sectionEnd > scrollTop){
            $("#nav a.scroll").removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
};
$(document).ready(function(){
    $("#nav a.scroll, .adv-nav a.scroll").on('click', function(e){
        e.preventDefault();
        target = $(this).attr("href");
        targetPosition = $(target).offset().top - 79;
        $("html, body").animate({
            scrollTop: targetPosition
        }, 1000);
        if ($('.hamburger').hasClass('show')){
            $('.hamburger').removeClass('show');
            $('nav ul').slideToggle();
            $('html,body').css('overflow','auto')
        }
    });
    heightArray = [];
    $(".d_d-t").each(function(){
        directionHeight = $(this).outerHeight();
        heightArray.push(directionHeight);
    });
    console.log(heightArray);
    $(".d_d-t").each(function(){
        $(this).css('height',Math.max.apply(Math, heightArray)+40);
    });
    
    $(document).on("scroll", activeScroll);
});