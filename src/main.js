$(function () {
    var slider = {
        var slideWidth = $('#slider').width();
        // var contLi = $('.slider__item').length;
        var quantityLi = $('#slider').children().length;
        var sliderWidth = slideWidth * quantityLi + 'px';
        var currentN = 0;
        var currentNClick = 0;
        var leftSlide;
        //start();

        function start() {
            $('#slider').css('width', sliderWidth);
            $('#sliderClick').css('width', sliderWidth);
            console.log('start. count = ' + quantityLi);
            //console.log(50e6);
        }

        function next(n) {
            leftSlide = -n * slideWidth + 'px'
            $('#slider').css('left', leftSlide);
        }

        function nextClick(n) {
            leftSlide = -n * slideWidth + 'px'
            $('#sliderClick').css('left', leftSlide);
        }

        function countSlider() {
            currentN += 1;
            if (currentN > 4) {
                currentN = 0;
            }
            next(currentN);

        }

        var timerId = setInterval(function () {
            countSlider();
        }, 2000);

        $('#slider').hover(
            function () {
                clearInterval(timerId);
            },
            function () {
                timerId = setInterval(function () {
                    countSlider();
                }, 2000);
            }
        )

        $('#sliderClick').click(function () {
            currentNClick = currentNClick + 1;
            if (currentNClick > 4) {
                currentNClick = 0;
            }
            nextClick(currentNClick);
        });
};
    slider.start();


});
