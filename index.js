//Get Copyright Year
$(document).ready(() => {
  $("#year").text(new Date().getFullYear());

  $("#submitForm").click(event => {

    const email = $("#email").val().trim()
    const subject = $("#subject").val().trim()
    const message = $("#message").val().trim()
    const status = $("#status")

    status.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {

    } else {
      event.preventDefault();
      status.append("<div>Please use a valid email address</div>")
    }

    if (subject.length >= 2) {

    } else {
      event.preventDefault();
      status.append("<div>Subject must be at least 2 characters</div>")
    }

    if (message.length >= 15) {

    } else {
      event.preventDefault();
      status.append("<div>Message must be at least 15 characters</div>")
    }
  })

  $("#portfolioNav").click(function () {
    $("html, body").animate({
      scrollTop: $("#PortfolioSection").offset().top
    }, 1000);
  });

  $("#aboutNav").click(function () {
    $("html, body").animate({
      scrollTop: $("#aboutMe").offset().top
    }, 1000);
  });

  $("#contactNav").click(function () {
    $("html, body").animate({
      scrollTop: $("#contactMe").offset().top
    }, 1000);
  });
})