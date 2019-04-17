$(function () {
    var sliderWidth = '1500px';
    var currentN = 0;
    function start(){
        $('#slider').css('width', sliderWidth);
        console.log('start');
    }

    function slider() {

    }
    function next(n) {
        console.log(n);
        var leftSlide = -n*300 + 'px'
        $('#slider').css('left', leftSlide);
    }
    $('#slider').click(function () {
        currentN = currentN + 1;
        if (currentN>4){currentN=0;}
        next(currentN);
    });
    start();

});
