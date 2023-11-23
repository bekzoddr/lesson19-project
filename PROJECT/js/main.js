
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
const body = document.body;
const modeToggle = document.querySelector(".switch");
let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}
