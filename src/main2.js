$(function () {
    var slideWidth = $('#slider').width();
    var quantityLi = $('#slider').children().length;
    var sliderWidth = slideWidth * quantityLi + 'px';
    var currentNClick = 0;
    var leftSlide;
    var currentN = 0;

    var slider = {
        start() {
            $('#slider').css('width', sliderWidth);
            $('#sliderClick').css('width', sliderWidth);
            slider.timerId = setInterval( slider.countSlider, 2000);
            slider.onHover();
        },

        nextClick(n) {
            leftSlide = -n * slideWidth + 'px'
            $('#sliderClick').css('left', leftSlide);
        },

        countSlider() {
            currentN += 1;
            if (currentN > 4) {
                currentN = 0;
            }
            slider.next(currentN);
        },

        next(n) {
            var leftSlide = -n * slideWidth + 'px';
            $('#slider').css('left', leftSlide);
        },

        onHover() {
            $('#slider').hover(
                function () {
                    clearInterval(slider.timerId);
                },
                function () {
                    slider.timerId = setInterval(slider.countSlider, 2000);
                }
            );
        }


    };

    $('#sliderClick').click(function () {
        currentNClick = currentNClick + 1;
        if (currentNClick > 4) {
            currentNClick = 0;
        }
        slider.nextClick(currentNClick);
    });

    slider.start();


});
