$(document).ready(function() {
  $('.container').mixItUp();
});

$(document).ready(function() {
  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".mobile-nav").toggleClass("is-closed");
    $(".menu").toggleClass("open");
  });
});
