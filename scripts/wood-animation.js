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


    var animeClipOn = new TimelineLite();
    var animeClipOut = new TimelineLite();
    var animeContourOn = new TimelineLite();
    var animeContourOut = new TimelineLite();


    woodContainer.on('mouseover', function () {
        console.log("on");
        animeClipOn.to('#clip-circle', 1,
            {
                attr: {
                    cx: 65,
                    cy: 65,
                    r: 60,
                    stroke: '#a2ab8a'
                },
                ease: Back.easeOut
            }
        )
            .to('#clip-circle', 1,
                {
                    attr: {
                        cx: 110,
                        cy: 70,
                        r: 60,
                        stroke: '#a2ab8a'
                    },
                    ease: Power2.easeOut
                }, "-=.5"
            )
            .to('#clip-circle', 1,
                {
                    attr: {
                        cx: 90,
                        cy: 110,
                        r: 60,
                        stroke: '#a2ab8a'
                    },
                    ease: Power2.easeOut
                }, "-=.5"
            ).to('#clip-circle', 1,
            {
                attr: {
                    cx: 65,
                    cy: 65,
                    r: 60
                },
                ease: Back.easeOut
            }
        );

        animeContourOn.to('#contour1', 1,
            {
                attr: {
                    cx: 65,
                    cy: 65,
                    r: 60,
                    stroke: '#a2ab8a'
                },
                ease: Back.easeOut
            }
        )
            .to('#contour1', 1,
                {
                    attr: {
                        cx: 110,
                        cy: 70,
                        r: 60,
                        stroke: '#a2ab8a'
                    },
                    ease: Power2.easeOut
                }, "-=.5"
            )
            .to('#contour1', 1,
                {
                    attr: {
                        cx: 90,
                        cy: 110,
                        r: 60,
                        stroke: '#a2ab8a'
                    },
                    ease: Power2.easeOut
                }, "-=.5"
            ).to('#contour1', 1,
            {
                attr: {
                    cx: 65,
                    cy: 65,
                    r: 60
                },
                ease: Back.easeOut
            }
        );

    });

    woodContainer.on('mouseout', function () {
        TweenMax.killAll();
        console.log("OUT");
        animeClipOut.to('#clip-circle', .7,
            {
                attr: {
                    cx: 88.408,
                    cy: 87.957,
                    r: 84.784
                },
                ease: Power2.easeInOut
            }
        );

        animeContourOut.to('#contour1', .7,
            {
                attr: {
                    cx: 88.408,
                    cy: 87.957,
                    r: 84.784,
                    stroke: '#000000'
                },
                ease: Power2.easeInOut
            }
        );
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
