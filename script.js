const currentYear = document.querySelector("[data-year]");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const phoneLink = document.querySelector("[data-phone-link]");
const emailLink = document.querySelector("[data-email-link]");

if (phoneLink && phoneLink.textContent.trim() !== "06 00 00 00 00") {
  phoneLink.href = `tel:${phoneLink.textContent.replace(/\s/g, "")}`;
}

if (emailLink && emailLink.textContent.trim() !== "naam@example.nl") {
  emailLink.href = `mailto:${emailLink.textContent.trim()}`;
}
