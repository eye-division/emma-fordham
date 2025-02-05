(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    //hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js--mobile-menu').unbind();
    $('#js--navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js--navigation-menu').slideToggle(function(){
        if($('#js--navigation-menu').is(':hidden')) {
          $('#js--navigation-menu').removeAttr('style');
        }
      });
    });
    // fitvid on embed
    $('.media').fitVids();

    // flexslider
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      touch: true
    });

    lightGallery(document.getElementById('lightgallery'), {
        selector: '.gallery--link',
        plugins: [lgZoom],
        licenseKey: '5FB39630-44A6-45E6-86C1-349104E6C6E0',
        speed: 500,
        download: false,
        mode: 'lg-fade',
        mobileSettings: {
            showCloseIcon: true,
            controls: false,
            download: false
        }
    });



  }); // end doc ready

})(jQuery); // End of use strict
