// Navbar JS

const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const menuItems = document.querySelector("#menu-items");

hamburgerIcon.addEventListener("click", () => {
  menuItems.style = "right: 0";
});

closeIcon.addEventListener("click", () => {
  menuItems.style = "right: -20rem";
});

// Navbar JS End

document.addEventListener("DOMContentLoaded", function () {
  const productCardImgages = document.querySelectorAll(".product-card img");

  console.log(productCardImgages);
  productCardImgages.forEach((img) => {
    img.style.cursor = "pointer";
    img.onclick = function () {
      const productImgSrc = img.src;
      console.log(productImgSrc);
      if (productImgSrc) {
        // Store the image source in localStorage
        localStorage.setItem("mainImgSrc", productImgSrc);

        // Navigate to the single product details page
        window.location.href = "singleproductdetails.html";
      } else {
        console.error("No img element found in product card.");
      }
    };
  });

  // Single product details page***
  const mainImg = document.getElementById("main-image");
  const smallImg = document.getElementsByClassName("small-image");

  // Retrieve the image source from localStorage
  const mainImgSrc = localStorage.getItem("mainImgSrc");
  if (mainImgSrc) {
    mainImg.src = mainImgSrc;
    if (smallImg.length > 0) {
      smallImg[0].src = mainImgSrc;
    }
  } else {
    console.error("No image source found in localStorage.");
  }

  // Optimize the small image click handling
  // Array.from(smallImg).forEach((img) => {
  //   img.onclick = function () {
  //     mainImg.src = img.src;
  //   };
  // });

  // Optimize the small image click handling
  for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
      mainImg.src = smallImg[i].src;
    };
  }
});
