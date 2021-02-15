$(document).ready(function() {
    var mapOwl = $('#map .map-wrapper').owlCarousel({
        nav: false,
        dots: false,
        items: 1,
        touch: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        mouseDrag: false,
        touchDrag: false
    });
    $('.map-navigation').on('click', 'li', function(e) {
        $.each($('#map .map-navigation .owl-dot'), function(i, elem) {
            $(elem).removeClass('active');
        });
        $(e.target).addClass('active');
        mapOwl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('#map .map-1 #Belarussian').on('click', function(){
        $('.map-navigation li:nth-child(2)').trigger('click');
    });
    $('#map .map-2 #belarus-stands image').on('click', function(){
        $('.map-navigation li:nth-child(3)').trigger('click');
    });

    // Third Map
    var $svgSections = $('.map-3 #overlay rect, .map-3 #overlay polygon, .map-3 #overlay path');
    var $categorySelects = $('.category-select');

    $categorySelects.on('click', function(e){
        unhightlightAll($categorySelects);
        $(e.target).toggleClass('active');
        unhightlightAll($svgSections);
        highlightSvgSections($(e.target).attr('category-select'), $(e.target).hasClass('active'));
    })

    function highlightSvgSections(category, hightlight) {
        var categorySvgSections = $.grep($svgSections,function(e){ return $(e).attr('category') == category; });
        $.each(categorySvgSections, function(ind, value) {
            if(hightlight) {
                $(categorySvgSections[ind]).removeClass('overlay-inactive');
                $(categorySvgSections[ind]).addClass('overlay-active');
            }
            else {
                $(categorySvgSections[ind]).removeClass('overlay-active');
                $(categorySvgSections[ind]).addClass('overlay-inactive');
            }
        });
    }

    function unhightlightAll(array) {
        $.each(array, function(ind, element) {
            $(element).removeClass('overlay-active');
            $(element).removeClass('active');
            if(!$(element).hasClass('category-select'))
                $(element).addClass('overlay-inactive');
        });
    }


    const elem = document.getElementById('panzoom-element');
    const initialWidth = $(window).width() - 75;
    const cont = document.getElementById('map-slide-2');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const resetButton = document.getElementById('reset');
    const panzoom = Panzoom(elem, {
        cursor: 'move',
        maxScale: 4,
        minScale: 1,
        initialZoom: 1,
        contain: "outside",
        panOnlyWhenZoomed: true
    });
    const parent = elem.parentElement
// No function bind needed
    parent.addEventListener('wheel', panzoom.zoomWithWheel);
    zoomInButton.addEventListener('click', panzoom.zoomIn)
    zoomOutButton.addEventListener('click', panzoom.zoomOut);
    resetButton.addEventListener('click', panzoom.reset)
    // elem.addEventListener('panzoomend', (event) => {
        // if (event.detail.x > initialWidth) {
        //     panzoom.pan(0, event.detail.y, { animate: true })
        // } else if (-initialWidth > event.detail.x) {
        //     panzoom.pan(0, event.detail.y, { animate: true })
        // }

        // var childP = elem.getBoundingClientRect();
        // var parentP = cont.getBoundingClientRect();
        // if(parentP.left >= childP.right-childP.width*0.3) {
        //     panzoom.pan(parentP.left - childP.width + childP.width*0.3, 0, { animate: true });
        // }
        // if(parentP.right <= childP.left+childP.width*0.3) {
        //     panzoom.pan(parentP.right - childP.width*0.3, 0, { animate: true });
        // }
        // if(parentP.top >= childP.bottom-childP.height*0.3) {
        //     panzoom.pan(0, parentP.top - childP.height + childP.height*0.3, { animate: true });
        // }
        // if(parentP.bottom <= childP.top+childP.height*0.3) {
        //     panzoom.pan(0, childP.top - childP.height*0.3, { animate: true });
        // }
    // });
});