document.querySelector(".menu_btn").addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.add("show");
});

document.querySelector("#menuclose").addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.remove("show");
});

const mobile_links = document.querySelectorAll(".mobile_menu a");

mobile_links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile_menu").classList.remove("show");
  });
});

document.querySelector("#cp_year").innerHTML = new Date().getFullYear();

// Slider
$(".products_grid").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 929,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
