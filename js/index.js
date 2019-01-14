(function($){
    $(function(){

        $('#projects-large').carousel({
            fullWidth: true,
            indicators: true
        });
        $('.next').click(function() {
            $('.carousel.carousel-slider').carousel('next');
        });
        $('.prev').click(function() {
            $('.carousel.carousel-slider').carousel('prev');
        });

        $('.parallax').parallax();
        $('.modal').modal();
    }); // end of document ready
})(jQuery); // end of jQuery name space