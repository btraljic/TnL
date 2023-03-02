//all jQuery in this file.

$(document).ready(function () {
  console.log("");

  $(window).scroll(function () {
    if (window.pageYOffset > 400) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
});
