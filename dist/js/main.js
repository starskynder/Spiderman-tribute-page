// Select navigation hamburger menu
const menuButton = document.querySelector(".nav-menu");

//Add click event listener to hamburger menu
menuButton.addEventListener("click", showHideMenu);

// Show or hide navigation menu
function showHideMenu() {
  const mainNav = document.querySelector(".nav-list");

  mainNav.classList.toggle("js-nav-open");

  const ariaExpanded = menuButton.getAttribute("aria-expanded");

  if (ariaExpanded === "true") {
    menuButton.setAttribute("aria-expanded", false);
  } else {
    menuButton.setAttribute("aria-expanded", true);
  }

  // Select hamburger menu lines and cross them when nav is opened
  const menuLines = document.querySelectorAll(".nav-menu__lines");

  menuLines.forEach(v => {
    v.classList.toggle("js-menu__lines");
  });

  // Chanhe background color of the main navigation when opened
  const nav = document.querySelector("nav");
  nav.classList.toggle("js-nav");
}
