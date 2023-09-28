document.addEventListener("DOMContentLoaded", function () {
  const customSlider = document.getElementById("custom-slider");
  const currentValue = document.getElementById("current-value");

  function updateSliderValue() {
    const value = customSlider.value;
    currentValue.innerText = value;
    currentValue.classList.add("active");

    const screenWidth = window.innerWidth;
    let leftPosition;

    if (screenWidth >= 768 && screenWidth <= 1399) {
      leftPosition = `${value / 780}px`;
    } else if (screenWidth >= 320 && screenWidth <= 767) {
      leftPosition = `${value / 1460}px`;
    } else {
      leftPosition = `${value / 415}px`;
    }

    currentValue.style.left = leftPosition;
  }

  updateSliderValue();

  customSlider.addEventListener("input", updateSliderValue);

  window.addEventListener("resize", updateSliderValue);
});
