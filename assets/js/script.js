const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".navItem");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
  });
});

const clientBtnEls = document.querySelectorAll(".clientBtn");
const clientQuoteEls = document.querySelectorAll(".clientQuote");

clientBtnEls.forEach((clientBtnEl, index) => {
  clientBtnEl.addEventListener("click", () => {
    clientQuoteEls[index].classList.toggle("clientQuote--open");
  });
});
