var $jq = jQuery.noConflict();
$jq('document').ready(function(){
    $jq('.sponsors').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      vertical: true,
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
    $jq('.gallery').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      adaptiveHeight: true,
    });
  });