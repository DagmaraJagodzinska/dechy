
$(document).ready(function () {
    var smallMediaWidth = 768;
    var viewportWidth = $(window).outerWidth();
    var firstStripes = $('.wood-animated');
    $(firstStripes).each(function (i) {
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var top_of_window = $(window).scrollTop();
        var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();

        if (bottom_of_object > top_of_window && top_of_object < bottom_of_window ) {
            $(this).addClass('animate');
        }
    });

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.wood-animated').each(function (i) {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var middle_of_object =
                $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
            /* If the object is completely visible in the window, fade in it */

                if (bottom_of_object > top_of_window && top_of_object < bottom_of_window ) {
                    $(this).addClass('animate');
                } else {
                    $(this).removeClass('animate');
                }
        });
    });

});
