
$(document).ready(function () {

    var potContainer = $('.pot-container');
    var pot = potContainer.find('.icon-box');

    pot.load('../img/pot_icon1.svg', function () {
        pot.parent().find('img').css('display', 'none');
    });

    var woodWave = $('.wood-animated');

    $(window).scroll(function () {
        var marginPoint = 100;

        woodWave.each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var middle_top_of_window = $(window).scrollTop() + marginPoint;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var middle_bottom_of_window = bottom_of_window - marginPoint;
            var top_of_window = $(window).scrollTop();

                if (bottom_of_object > middle_top_of_window && top_of_object < middle_bottom_of_window ) {
                    console.log('set animation');
                    $(this).addClass('animate');
                } else {
                    $(this).removeClass('animate');
                    console.log('no no');
                }
        });
    });
});
