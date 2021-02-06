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
    /**/
    // window.fbAsyncInit = function() {
    //     FB.init({
    //         appId: '2795263637456879',
    //         autoLogAppEvents: true,
    //         xfbml: true,
    //         version: 'v9.0'
    //     });
    //     FB.api(
    //         '/ipebelarus/posts',
    //         'GET',
    //         {
    //             access_token: 'EAAnuRwgqBZB8BAJjM81AHv67njL1cIvZBXJkOugMZCaw5Ay3ZCddRiN6DZCzSBQCZBy1zJDWHiVWHvMj25OchDxdrpxNre49DxO5M7TPEowE8K1wdH3qIXgBxhCjjI0CxPKYbdUU6Lwz0fZCmiOSjxZAe5bkDjbfUJXfsNHdJZCVVqkK18zLLMT32mhslI6njwTAZD',
    //             fields:" full_picture,message,permalink_url,created_time",
    //             limit: "6"
    //         },
    //         function (response) {
    //             console.log(response);
    //         }
    //     );
    // };
    /**/
})