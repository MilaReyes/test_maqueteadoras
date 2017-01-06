$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});
$(document).ready(function() {
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: true,
    hashchange: true,
    scrollable: true
  });
});
  $(".foo, .bar").smoove({
    skew : '20%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
  });