//all jQuery in this file.

$(document).ready(function () {
  // --------------------------------------------------------------------------
  // ----- Change header class on scroll
  // --------------------------------------------------------------------------
  $(window).scroll(function () {
    if (window.pageYOffset > 400) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // --------------------------------------------------------------------------
  // ----- Go to url from span
  // --------------------------------------------------------------------------
  $(".card").click(function (e) {
    e.preventDefault();
    window.location = $(this).attr("href");
  });
});
