$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

;(function($){
    'use strict';
    $.fn.smoothScroll = function(setting) {
        var _default = {
                duration: 1000,
                easing: 'swing',
                offset: 0
            },
            _setting = $.extend(_default, setting),
            _handler = function() {
                var dest = 0,
                    target = this.hash,
                    $target = $(target);

                $(this).on('click', function(e){
                    e.preventDefault();
                    if ($target.offset().top > ($(document).height() - $(window).height())) {
                        dest = $(document).height() - $(window).height();
                    } else {
                        dest = $target.offset().top - _setting.offset;
                    }
                    $('html, body').animate({
                        scrollTop: dest
                    }, _setting.duration, _setting.easing);
                });
            };
        return this.each(_handler);
    };
})(jQuery);


jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});