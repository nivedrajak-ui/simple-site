// Mobile nav toggle — flips a class on the nav when the menu button is clicked.
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Dark mode toggle — remembers the visitor's choice in localStorage
  // so it stays the same on their next visit to any page.
  var themeToggle = document.querySelector(".theme-toggle");

  function applyIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  // The <html> element's data-theme was already set (if saved) by the
  // small inline script in <head>, before the page painted. Just sync
  // the icon here.
  applyIcon(document.documentElement.getAttribute("data-theme") || "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "light";
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      applyIcon(next);
    });
  }
});
