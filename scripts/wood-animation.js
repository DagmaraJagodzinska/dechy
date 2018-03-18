$(document).ready(function () {

    var potContainer = $('.pot-container');
    var pot = potContainer.find('.icon-box');

    var plantContainer = $('.plant-container');
    var plant = plantContainer.find('.icon-box');

    var woodContainer = $('.wood-container');
    var wood = woodContainer.find('.icon-box');

    var woodWave = $('.wood-animated');

    plant.load('../img/plant_icon1.svg', function () {
        plant.parent().addClass('pattern-img').find('img').css('display', 'none');
    });
    //
    wood.load('../img/wood_icon000.svg', function () {
        wood.parent().addClass('pattern-img').find('img').css('display', 'none');
    });

    pot.load('../img/pot_icon1.svg', function () {
        pot.parent().addClass('pattern-img').find('img').css('display', 'none');
    });

    $(window).scroll(function () {
        var marginPoint = 100;

        woodWave.each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var middle_top_of_window = $(window).scrollTop() + marginPoint;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var middle_bottom_of_window = bottom_of_window - marginPoint;
            var top_of_window = $(window).scrollTop();

            if (bottom_of_object > middle_top_of_window && top_of_object < middle_bottom_of_window) {
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate');
            }
        });
    });
});
