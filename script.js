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
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  autoplay: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".reviews_grid").slick({
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $("#reviewLeft"),
  nextArrow: $("#reviewRight"),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const add_to_cart_btns = document.querySelectorAll(".add_to_cart");

add_to_cart_btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const product_id = event.target.dataset.product - id;
  });
});

async function getAProduct(id) {
  const response = await fetch(`products.json`);
  const data = await response.json();
  return data.filter((product) => product.id === id);
}

class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    const in_cart = this.items.find((el) => el._id === item._id);

    if (in_cart) {
      return; // change to alert later
    }

    return this.items.push({ ...item, quantity: 1 });
  }

  removeFromCart(id) {
    return this.items.filter((item) => item._id !== id);
  }

  get total() {
    return this.items.reduce((obj, acc) => {
      return acc + parseFloat(obj.price) * parseInt(obj.quantity);
    });
  }

  increaseQty(id) {
    return this.items.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: quantity + 1,
        };
      }
      return item;
    });
  }

  decreaseQty(id) {
    return this.items.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: quantity - 1,
        };
      }
      return item;
    });
  }
}

// Cart Schema
