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
