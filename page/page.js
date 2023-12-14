new Swiper("#swiper-1", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#right-space",
    prevEl: "#left-space",
  },
  lazyLoading: true,
  loop: true,
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  pagination: {
    el: "#swiper-2 .swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`;
    },
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  breakpoints: {
    800: {
      slidesPerView: 1.5,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

//price-filter
const lowerSlider = document.getElementById("lower");
const upperSlider = document.getElementById("upper");

document.getElementById("two").value = upperSlider.value;
document.getElementById("one").value = lowerSlider.value;

const lowerVal = parseInt(lowerSlider.value);
const upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;
    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
  document.querySelector("#two").value = this.value;
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;
    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
  document.querySelector("#one").value = this.value;
};

// hide/show arrow buttons

var sortbyDowns = document.querySelectorAll("sortby-icon");

// Sortby-hidden bar

const handleHideShowSortbyHidden = (x) => {
  const sortBy = document
    .getElementById(x)
    .getElementsByClassName("sortby-hidden");
  const arrowIcon = document
    .getElementById(x)
    .getElementsByClassName("sortby-icon");
  sortBy[0].style.display = "block";
  sortBy[0].style.zIndex = "1";
  console.log(arrowIcon[0]);
  arrowIcon[0].style.display = "none";
};

document.addEventListener("click", (event) => {
  const sortBys = document.querySelectorAll(".sortby");
  sortBys.forEach((sortBy) => {
    hiddenDiv = sortBy.getElementsByClassName("sortby-hidden");
    sortByIcon = sortBy.getElementsByClassName("sortby-icon");
    if (!sortBy.contains(event.target)) {
      hiddenDiv[0].style.display = "none";
      sortByIcon[0].style.display = "block";
    } else {
      hiddenDiv[0].style.display = "block";
    }
  });
});

const handleToggle = () => {
  const toggle = document.getElementById("toggle");
  toggle.onclick = () => {
    if (toggle.classList.contains("toggle-off")) {
      toggle.classList.add("toggle-on");
      toggle.classList.remove("toggle-off");
    } else {
      toggle.classList.remove("toggle-on");
      toggle.classList.add("toggle-off");
    }
  };
};
handleToggle();

const handleShowHideWishList = () => {
  const wistList = document.getElementById("wishlist");
  const offWishList = document.getElementById("off-wishlist");
  console.log(wistList);
  const hiddenDiv = document.getElementById("hidden-div");
  wistList.onclick = () => {
    hiddenDiv.style.display = "block";
  };
  offWishList.onclick = () => {
    hiddenDiv.style.display = "none";
  };
};

handleShowHideWishList();

const handleShowHiddenSidebar = () => {
  const sidebarCartItems = document.querySelectorAll(".sidebar-cart-item");
  sidebarCartItems.forEach((sidebarCartItem) => {
    const hiddenDiv1 = sidebarCartItem.querySelector(".sidebar-hidden-1");
    const cartText = sidebarCartItem.querySelector(".cart-text");
    const arrow = cartText.querySelector("#arrow");
    sidebarCartItem.onclick = () => {
      console.log(hiddenDiv1);
      if (getComputedStyle(hiddenDiv1).display == "none") {
        arrow.style.rotate = "90deg";
        hiddenDiv1.style.display = "block";
        hiddenDiv1.style.borderBottom = "1px solid const(--gray);";
      } else {
        hiddenDiv1.style.display = "none";
        arrow.style.rotate = "0deg";
      }
    };
  });
};

handleShowHiddenSidebar();

const handleShowHiddenSearch = () => {
  const searchIcon = document.getElementById("search-icon");
  const searchDiv = document.getElementById("search-div");
  searchIcon.onclick = () => {
    if (searchDiv.classList.contains("search-div-add")) {
      searchDiv.classList.remove("search-div-add");
    } else {
      searchDiv.classList.add("search-div-add");
    }
  };
};

handleShowHiddenSearch();

const handleHeartClick = () => {
  const heartIcons = document.querySelectorAll(".heart-icon");
  heartIcons.forEach((heartIcon) => {
    heartIcon.onclick = () => {
      if (heartIcon.style.fill !== "const(--red)") {
        heartIcon.style.fill = "const(--red)";
      } else {
        heartIcon.style.fill = "const(--black)";
      }
    };
  });
};

handleHeartClick();

const handleBuyClick = () => {
  const purposeIconDivs = document.querySelectorAll(".product-purpose-icon");
  purposeIconDivs.forEach((purposeIconDiv) => {
    const buyIcon = purposeIconDiv.querySelector(".buy-icon");
    const buyIconHidden = purposeIconDiv.querySelector(".buy-icon-hidden");
    if (buyIcon && buyIconHidden) {
      buyIcon.onclick = () => {
        buyIconHidden.style.opacity = 1;
        buyIconHidden.style.top = "10px";
        buyIconHidden.style.display = "block";
        buyIconHidden.style.backgroundColor = "const(--white)";
        buyIconHidden.style.border = "none";
      };
    } else {
      console.log("No Buy Icon Here");
    }
  });
};

handleBuyClick();
