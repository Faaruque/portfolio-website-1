// init Isotope
var $grid = $(".portfolio-wapper").isotope({
  // options
});
// filter items on button click
$(".portfolio-menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// filter items on menuActive click
$(".portfolio-menu").on("click", "li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// jQuary-magnific-popup
$(document).ready(function () {
  $(".image-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// aos-animation script
AOS.init({
  offset: 300,
  duration: 1000,
});

// init owl-carousel-product-area
$(".team-wapper").owlCarousel({
  items: 1,
  autoplay: true,
  dots: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
    },
    750: {
      items: 2,
      nav: false,
      loop: true,
    },
    1024: {
      items: 2,
      nav: false,
      loop: true,
    },
    1440: {
      items: 2,
      nav: false,
      loop: true,
    },
  },
});
// smoothscroll js Not
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100,
  speedAsDuration: true,
});

// bottom to top scroll javaScript here
const scrollTop = document.getElementById("scrollTop");
window.addEventListener("scroll", scrollFuncton);
function scrollFuncton() {
  if (window.pageYOffset > 100) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}
scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// sticky navigation-bar
window.addEventListener("scroll", function () {
  const navBar = this.document.getElementById("NavBar");
  navBar.classList.toggle("sticky", window.scrollY > 0);
});
