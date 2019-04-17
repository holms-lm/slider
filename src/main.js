$(function () {
    var slideWidth = $('#slider').width();
    // var contLi = $('.slider__item').length;
    var quantityLi = $('#slider').children().length;
    var sliderWidth = slideWidth * quantityLi + 'px';
    var currentN = 0;
    var leftSlide;
    start();
    function start(){
        $('#slider').css('width', sliderWidth);
        console.log('start. count = ' + quantityLi);
    }

    function next(n) {
        leftSlide = -n * slideWidth + 'px'
        $('#slider').css('left', leftSlide);
    }

    function countSlider() {
        currentN += 1;
        if (currentN>4){currentN=0;}
        next(currentN);

    }
    var timerId = setInterval(function() {
        countSlider();
    }, 2000);

    $('#slider').hover(
        function () {
            clearInterval(timerId);
        },
        function () {
            timerId = setInterval(function() {
                countSlider();
            }, 2000);
        }
    )

    $('#slider').click(function () {
        currentN = currentN + 1;
        if (currentN>4){currentN=0;}
        next(currentN);
    });

});
