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

