
$(document).ready(function () {

    var potContainer = $('.pot-container');
    var pot = $('.pot');

    pot.load('../img/pot_icon1.svg', function () {
        pot.parent().find('img').css('display', 'none');
    });

    var woodWave = $('.wood-animated');
    woodWave.each(function (i) {
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var top_of_window = $(window).scrollTop();
        var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();

        if (bottom_of_object > top_of_window && top_of_object < bottom_of_window ) {
            $(this).addClass('animate');
        }
    });

    woodWave.scroll(function () {
        $('.wood-animated').each(function (i) {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();

                if (bottom_of_object > top_of_window && top_of_object < bottom_of_window ) {
                    $(this).addClass('animate');
                } else {
                    $(this).removeClass('animate');
                }
        });
    });
});
