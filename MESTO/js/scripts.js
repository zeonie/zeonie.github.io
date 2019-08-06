$(document).ready(function(){
    var bannerHeight = $('.call-wrap').outerHeight();
    console.log(bannerHeight);
    $('.left-sidebar').css('padding-bottom',bannerHeight+'px')
});