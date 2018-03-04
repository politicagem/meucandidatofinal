function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
(function() {
  var carousel = {
    ittem: document.getElementById('carousel'),
    interval: 10000,
    items: this.carousel.getElementsByClassName('carrossel-ativo'),
    itemsLength: 0,
    controls: this.carousel.getElementsByClassName('carrossel-controle'),
    controlsLength: 0
  };
  var carouselTimer = setInterval(carouselPlay, carousel.interval);
  
  carousel.itemsLength = carousel.items.length;
  carousel.controlsLength = carousel.controls.length;
  
  function carouselControls() {
    for (var i = carousel.controlsLength; i--;) {
      carousel.controls[i].addEventListener('click', carouselReset, false);
    }
  }
  
  function carouselPlay() {
    for (var i = carousel.itemsLength; i--;) {
      if (carousel.items[i].checked) {
        if (i !== carousel.itemsLength - 1) {
          carousel.items[i + 1].checked = true;
        } else if (i === carousel.itemsLength - 1) {
          setTimeout(function() {
            carousel.items[0].checked = true;
          }, 0);
        }
      }
    }
  }
  
  function carouselReset() {
    console.log(1)
    clearInterval(carouselTimer);
    carouselTimer = setInterval(carouselPlay, carousel.interval);
  }
  carouselControls();
})();