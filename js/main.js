$('.owl-carousel').owlCarousel({
  autoplay: 1000,
  autoplayHoverPause: true,
  loop: true,
  margin: 0,
  navText: ['вперед', 'назад'],  
  // theme : "owl-theme",
  responsiveClass: true,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    568: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
 $('.popup-gallery').magnificPopup({
       delegate: 'a',
       type: 'image',
       tLoading: 'Загрузка изображения #%curr%...',
       gallery: {
         enabled: true,
         navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
   }
 });

