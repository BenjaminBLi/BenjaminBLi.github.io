(function($){
$(function(){

    $('#projects-large').carousel({
        fullWidth: true,
        indicators: true
    });
    $('#projects-small').carousel();
    $('.parallax').parallax();
    $('.modal').modal();

}); // end of document ready
})(jQuery); // end of jQuery name space