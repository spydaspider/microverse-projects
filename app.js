const menuIcon = document.querySelector(".menu-icon");
const barX1 = document.querySelector(".bar-x:nth-child(1)");
const barX3 = document.querySelector(".bar-x:nth-child(3)");
const bar1 = document.querySelector(".bar:nth-child(1)");
const bar2 = document.querySelector(".bar:nth-child(2)");
const navContainer = document.querySelector(".nav-container");
const bar3 = document.querySelector(".bar:nth-child(3)");
let navMenu = document.querySelector(".nav-menu");
const xIcon = document.querySelector(".x-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
  barX1.classList.toggle("active");
  barX3.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
  navContainer.classList.toggle("active");
});
xIcon.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  navMenu.classList.remove("active");
  barX1.classList.remove("active");
  barX3.classList.remove("active");
  bar1.classList.remove("active");
  bar2.classList.remove("active");
  bar3.classList.remove("active");
  navContainer.classList.remove("active");
});
document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    barX1.classList.remove("active");
    barX3.classList.remove("active");
    bar1.classList.remove("active");
    bar2.classList.remove("active");
    bar3.classList.remove("active");
    navContainer.classList.remove("active");
  })
);
