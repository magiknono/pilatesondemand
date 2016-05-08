//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .


$('.scroll-down').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 1500);
    ;
//                                       |    |
//                                       |    --- duration (milliseconds)
//                                       ---- distance from the top
});
$("#email").hide();
$( ".clickme" ).click(function() {
  $(".btn-danger").hide();
  $( "#email" ).slideDown( "slow", function() {
    // Animation complete.
  });
});
