document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("custom-slider")
    .addEventListener("input", function (evt) {
      let value = evt.target.value;
      document.getElementById("current-value").innerText = value;
      document.getElementById("current-value").classList.add("active");
      document.getElementById("current-value").style.left = `${value / 415}px`;
    });
});
