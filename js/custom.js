function activeScroll(){
    var scrollTop = $(document).scrollTop();
    $("#nav a.scroll").each(function(){
        sectionName = $(this).attr("href");
        sectionPosition = $(sectionName).position().top - 80;
        sectionEnd = sectionPosition + $(sectionName).outerHeight() + 80;
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
        targetPosition = $(target).offset().top - 80;
        $("html, body").animate({
            scrollTop: targetPosition
        }, 1000);
    })
    $(document).on("scroll", activeScroll);
});