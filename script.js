var TrandingSlider = new Swiper('.slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mobileNav = document.getElementById('mobileNav');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    menu.addEventListener('click' , function () {
      mobileNav.classList.add('fade_in');
    })
    close.addEventListener('click' , function () {
      mobileNav.classList.remove('fade_in');
    })
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkModeEnabled = body.classList.contains('dark-mode');

        localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    });
});


