// $(document).ready(function() {
// $('.js__features').waypoint(function(direction) {
//   if (direction == "down") {
//     $("nav").addClass('sticky');
//   } else {
//     $("nav").removeClass('sticky');
//   }
// }, {
//   offset: '120px;'
// })

// });

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // * STICKY NAVBAR
  window.onscroll = function() {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop + 120;

  function myFunction() {
    window.pageYOffset >= sticky
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  }

  // Animation on scroll

  $(".js__wp-1").waypoint(
    function(direction) {
      $(".js__wp-1").addClass("animated slideInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js__wp-2").waypoint(
    function(direction) {
      $(".js__wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js__wp-3").waypoint(
    function(direction) {
      $(".js__wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js__wp-4").waypoint(
    function(direction) {
      $(".js__wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  // MOBILE NAV CONFIGURATION
  let nav = $(".js__nav-main");
  let icon = $("#nav-icon");

  icon.click(function() {
    if (icon.hasClass("ion-navicon-round")) {
      nav.show();
      icon.addClass("ion-close-round").removeClass("ion-navicon-round");
    } else {
      nav.hide();
      icon.removeClass("ion-close-round").addClass("ion-navicon-round");
    }
  });

  // NAV RESTORE WHEN SCREEN RESIZED
  var width = $(window).width();
  $(window).on("resize", function() {
    if ($(this).width() > 752) {
      nav.show();
    } else {
      nav.hide();
      icon.removeClass("ion-close-round").addClass("ion-navicon-round");
    }
  });

  // NAV HIDE WHEN SCROLLED
  $(window).on("scroll", function() {
    if ($(this).width() > 752) {
      nav.show();
    } else {
      nav.hide();
      icon.removeClass("ion-close-round").addClass("ion-navicon-round");
    }
  });
});
