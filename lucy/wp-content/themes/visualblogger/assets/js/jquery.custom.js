(function ($) {
   //create closure so we can safely use $ as alias for jQuery

   $(document).ready(function () {
      "use strict";

      /*-----------------------------------------------------------------------------------*/
      /*  bxSlider
        /*-----------------------------------------------------------------------------------*/
      $(".owl-carousel").owlCarousel({
         autoplay: true,
         autoplayHoverPause: true,
         loop: true,
         dots: true,
         nav: true,
         nestedItemSelector: "wp-block-post",
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
            },
            600: {
               items: 1,
            },
            1000: {
               items: 1,
            },
         },
      });

      $(".owl-carousel-2").owlCarousel({
         autoplay: true,
         autoplayHoverPause: true,
         loop: true,
         dots: false,
         nav: false,
         nestedItemSelector: "wp-block-post",
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
            },
            600: {
               items: 1,
            },
            1000: {
               items: 1,
            },
         },
      });

      $("#featured-content .owl-carousel").show();
   });
})(jQuery);

jQuery(".sidebar").theiaStickySidebar({
   additionalMarginTop: 20,
   additionalMarginBottom: 5,
});
