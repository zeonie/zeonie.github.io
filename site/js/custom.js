$(document).ready(function () {
    $('.news.owl-carousel').owlCarousel({
        nav: false,
        navText: ["<i class='prev'><</i>","<i class='next'>></i>"],
        dots: true,
        margin: 12,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            544: {
                items: 1,
                margin: 0,
            },
            545: {
                items: 2,
            },
            768: {
                items: 3,
                nav: true
            },
            991: {
                items: 3,
                nav: true
            },
            1320: {
                items: 4,
                nav: true
            }
        }
    });
    $('.vacation-tablink').on('click', function(e) {
        e.preventDefault();
        let thisTarget = $(this).attr('href');
        $('.vacation-tablink, .vacation--tabcontent').each(function() {
           $(this).removeClass('active');
        });
        $(this).addClass('active');
        $(thisTarget).addClass('active');
    });
    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        let thisBody = $('body');
        if ($(this).hasClass('active')) {
            thisBody.removeClass('nav-open');
            $(this).removeClass('active');
        } else {
            thisBody.addClass('nav-open');
            $(this).addClass('active')
        }
    });
    $('.main-nav LI A').on('click', function(e) {
        $('.hamburger').removeClass('active');
        $('body').removeClass('nav-open');
    });
});