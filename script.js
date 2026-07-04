const currentYear = document.querySelector("[data-year]");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
