function slider() {

  let sliderContainer = $("#product-slider .slider");
  sliderContainer.data("activeSlide", "1");
  let children = sliderContainer.children("img");

  setInterval(moveSlider, 5000);

  function moveSlider() {
    let currentSlide = parseInt(sliderContainer.data("activeSlide"));
    let width = $(children[(currentSlide - 1)]).outerWidth(true) * -1;

    sliderContainer.css("transition", `transform 1s cubic-bezier(0.65, 0, 0.35, 1)`);
    sliderContainer.css("transform", `translateX(${width}px)`);

    setTimeout(() => {

      sliderContainer.css("transition", '');

      if (currentSlide < children.length) {
        sliderContainer.data("activeSlide", (currentSlide + 1)).toString();
      } else {
        sliderContainer.data("activeSlide", 1).toString();
      }

      if (currentSlide > 1) {
        sliderContainer.find(`img[data-id=${currentSlide-1}]`).appendTo(sliderContainer);
      } else {
        sliderContainer.find(`img[data-id=${children.length}]`).appendTo(sliderContainer);
      }

      sliderContainer.css("transform", '');

    }, 1000);
  }
}

slider();
