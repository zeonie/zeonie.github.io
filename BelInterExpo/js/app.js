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
    let navLinks = $('.nav-link');
    navLinks.on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr("href"),
            targetPosition = $(target).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition
        }, 1000);
        if ( $('.hamburger').hasClass('_active') && $('#nav').hasClass('_show')) {
            $('.hamburger').removeClass('_active');
            $('#nav').removeClass('_show');
        }
    });
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
    $('.map-wrapper SVG G#overlay RECT, .map-wrapper SVG G#overlay POLYGON').on('click', function(e) {
        e.preventDefault();
        let thisTarget = $(this).attr('id'),
            neededPage =  $('#trigger_'+thisTarget).attr('href');
        window.open(neededPage, "_blank");
    });
    // $('.modal-mp').magnificPopup({
    //     type: 'iframe',
    //     iframe: {
    //         markup: '<div class="mfp-iframe-scaler">'+
    //             '<div class="mfp-close-wrap"><div class="mfp-close"></div></div>'+
    //             '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //             '</div>',
    //     }
    // });
    /*modal companie*/
    /*modal companie*/
    $('.org-item').on('click', function(e) {
        e.preventDefault();
        let thisTarget = $(this).attr('data-id'),
            neededPage =  $('#trigger_'+thisTarget).attr('href');
        window.open(neededPage, "_blank");

    });
    // $('.modal-mp').magnificPopup({
    //     type: 'iframe',
    //     iframe: {
    //         markup: '<div class="mfp-iframe-scaler">'+
    //             '<div class="mfp-close-wrap"><div class="mfp-close"></div></div>'+
    //             '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //             '</div>',
    //     }
    // });
    /*modal companie*/
    /*form sumbit*/
        let myFrom = $('#sf');
        myFrom.on('submit', function(e) {
            e.preventDefault();
            let formData = new FormData();
            formData.append("name", $('input[name="t_name"]').val());
            formData.append("phone", $('input[name="t_phone"]').val());
            formData.append("message", $('input[name="t_message"]').val());
            $.ajax({
                url: "/form.php",
                type: "POST",
                dataType: "json",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (data) {
                    if (data.ok == "Y") {
                        $("#sf")[0].reset();
                        $("#result").css("display", "block");
                        $("#result").addClass("success");
                        if ($("#sf").hasClass("en")) {
                            $("#result").text("Your mail has been sent for our managers!");
                        } else {
                            $("#result").text("Ваше письмо было отправлено нашим менеджерам!");
                        }
                        setTimeout(function () {
                            $("#result").hide();
                        }, 3000);
                    } else {
                        $("#result").css("display", "block");
                        $("#result").addClass("warning");
                        if ($("#sf").hasClass("en")) {
                            $("#result").text("An error has occurred! Please try again later.");
                        } else {
                            $("#result").text("Произошла ошибка! Пожалуйста, повторите попытку позже.");
                        }
                        setTimeout(function () {
                            $("#result").hide();
                        }, 3000);
                    }
                },
                error: function (data) {
                    console.log(data);
                },
            });
            // Prevents default submission of the form after clicking on the submit button.
            return false;
        });
    /*form sumbit*/
    /* companie footer */
     let companyTriggerForm = $('.companie FOOTER > A.btn'),
         formWrap = $('.form-wrap');
     companyTriggerForm.on('click',function(e) {
         e.preventDefault();
         if ( formWrap.hasClass('_show') ) {
             formWrap.slideUp(300).removeClass('_show');
         } else {
             formWrap.slideDown(300).addClass('_show');
         }
     });
    /* comapnie footer*/
})