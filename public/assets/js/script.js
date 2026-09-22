const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
