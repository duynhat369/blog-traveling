/****************** SCROLL TOP-NAR ******************/
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("top-bar").style.padding = "0px 0px";
    document.getElementById("top-bar").style.backgroundColor =
      "rgba(0,0,0, 0.9)";
    document.getElementById("borderHeader").style.borderBottom = "unset";
  } else {
    document.getElementById("top-bar").style.padding = "30px 0px";
    document.getElementById("top-bar").style.backgroundColor = "unset";
    document.getElementById("borderHeader").style.borderBottom =
      "1px solid rgba(94, 94, 94, 0.9)";
  }
}

/****************** ONCLICK SLIDER BULLET BANNER ******************/
// window.addEventListener('DOMContentLoaded', showSlides)

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
