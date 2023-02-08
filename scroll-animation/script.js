const elements = document.querySelectorAll('.js-scroll');

window.addEventListener('scroll', function() {
  elements.forEach((element, index) => {
    const windowHeight = window.innerHeight;
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition <= (windowHeight - 200)) {
      if (index % 2 === 0) {
        element.classList.add('scrolled');
      } else {
        element.classList.add('scrolled-left');
      }
    }
  });
});
