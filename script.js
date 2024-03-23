    var swiper = new Swiper(".home-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
     loop:true,
     autoplay:{
        delay: 3000,
        disableOnInteraction:false,
     }
    });

    var swiper = new Swiper(".movies-container", {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      function redirectToPage() {
        // Change the URL to the desired page
        window.location.href ='home.html';
      }