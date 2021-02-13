$(document).ready(function() {
    let thisLang = $('html').attr('lang');
    function setActiveLang() {
        let langItems = $('.lang-item');
        langItems.each(function() {
           if ( $(this).attr('id') == thisLang ) {
               $(this).addClass('_is-active');
           }
        });
    }
    setActiveLang();
    $('.about-us.owl-carousel').owlCarousel({
        nav: false,
        dots: true,
        items: 1,
        touch: true,
        drag: true,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 3
            },
            991: {
                items: 4
            }
        }
    });
    $('.about-img-link').magnificPopup({type:'image'});
    /*tabs*/
    let tabLinks = $('.tab-item > A');
    tabLinks.on('click', function(e) {
        e.preventDefault();
        let tabTarget = $(this).attr('href'),
            tabToOpen = $(tabTarget),
            allTabs = $('.tab-content');
        allTabs.each(function() {
           $(this).removeClass('_is-active');
        });
        tabLinks.each(function() {
            $(this).removeClass('_is-active');
        });
        tabToOpen.addClass('_is-active');
        $(this).addClass('_is-active');
    })
    /*tabs*/
    /*mobile nav*/
    let hamburger = $('.hamburger'),
        nav = $('#nav');
    hamburger.on('click', function(e) {
        e.preventDefault();
        if ( nav.hasClass('_show') ) {
            nav.removeClass('_show');
            $(this).removeClass('_active');
        } else {
            nav.addClass('_show');
            $(this).addClass('_active');
        }
    })
    /*mobile nav*/
    /*modal companie*/
        $('.map-wrapper SVG G#overlay PATH').on('click', function(e) {
            e.preventDefault();
            let thisTarget = $(this).attr('id');
            $('#trigger_'+thisTarget).trigger('click');
        });
        $('.modal-mp').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close-wrap"><div class="mfp-close"></div></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
            }
        });
    /*modal companie*/
    /*modal companie*/
    $('.org-item').on('click', function(e) {
        e.preventDefault();
        let thisTarget = $(this).attr('data-id');
        $('#trigger_'+thisTarget).trigger('click');
    });
    $('.modal-mp').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close-wrap"><div class="mfp-close"></div></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',
        }
    });
    /*modal companie*/
})