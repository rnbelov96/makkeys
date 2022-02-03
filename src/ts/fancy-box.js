const divElList = document.querySelectorAll('[data-fancybox="slider-images"]');

divElList.forEach(el => {
  el.setAttribute('href', el.children[0].getAttribute('src'));
});

const bottomDivElList = document.querySelectorAll('[data-fancybox="bottom-slider"]');

bottomDivElList.forEach(el => {
  el.setAttribute('href', el.children[0].getAttribute('src'));
});
