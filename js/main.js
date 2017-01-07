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
   $(".bar").smoove({
    move: '20%',
    // moveX is overridden to -200px for ".bar" object
    
  });
  $(".foo").smoove({
    skew : '20%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '200px',
    moveY   : '200px',
  });
    $(".foo2").smoove({
   rotate3D: '20%',
   moveX   : '200px',
   moveY   : '200px',
    // moveX is overridden to -200px for ".bar" object
  });
   $(document).ready(function(){
    $('.pics').hover(function() {
        $(".pics").addClass('transition');
    
    }, function() {
        $(".pics").removeClass('transition');
    });
});