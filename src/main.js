$(function () {
    var slider = {
        // slideWidth : $('#slider').width(),
        slideWidth : 300,
        // var contLi = $('.slider__item').length;
        // quantityLi : $('#slider').children().length,
        quantityLi : 3,
        // sliderWidth : slideWidth * quantityLi + 'px',
        sliderWidth : '900 px',
        currentN : 0,
        currentNClick : 0,
        leftSlide,
        //start();

        start() {
            $('#slider').css('width', slider.sliderWidth);
            $('#sliderClick').css('width', slider.sliderWidth);
            // console.log('start. count = ' + quantityLi);
            //console.log(50e6);
            slider.timerId = setInterval(function () {
                slider.countSlider();
            },
                2000);
        },

        next(n) {
            leftSlide = -n * slider.slideWidth + 'px'
            $('#slider').css('left', slider.leftSlide);
        },

        nextClick(n) {
            slider.leftSlide = -n * slideWidth + 'px'
            $('#sliderClick').css('left', slider.leftSlide);
        },

        countSlider() {
            slider.currentN += 1;
            if (slider.currentN > 4) {
                slider.currentN = 0;
            }
            slider.next(slider.currentN);

        },



};
    // $('#slider').hover(
    //     function () {
    //         clearInterval(slider.timerId);
    //     },
    //     function () {
    //         slider.timerId = setInterval(function () {
    //             slider.countSlider();
    //         }, 2000);
    //     }
    // )
    slider.start();
    $('#sliderClick').click(function () {
        slider.currentNClick = slider.currentNClick + 1;
        if (slider.currentNClick > 4) {
            slider.currentNClick = 0;
        }
        slider.nextClick(slider.currentNClick);
    });


});
