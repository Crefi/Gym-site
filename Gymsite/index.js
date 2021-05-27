// document ready function
$(function () {
    // store jquery references to elements in const variables
    const headerNav = $('header nav');
    const hamburgerMenu = $('#hamburger-menu');
    
    const searchContainerHide = $('#search-container-hide');
    const searchContainer = $('#search-container');
  
    // initialize hero slider
    $('#hero-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
      fade: true,
      speed: 1000,
      cssEase: 'linear'
    });

  

    // initialize event handling
    hamburgerMenu.on('click', () => {
      headerNav.toggle();
    });

  

    searchContainerHide.on('click', () => {
      searchContainer.css({
        'opacity': '0',
        'visibility': 'hidden',
        'z-index': '0'
      });
    });

    

  });
