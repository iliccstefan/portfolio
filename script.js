// Curent year in footer
const currentYear = document.querySelector(".current-year");

currentYear.textContent = new Date().getFullYear();

// Anchor link smooth scroll
document.addEventListener("click", (event) => {
	const { target } = event;

	if (!target.matches('a[href^="#"]')) return;

	event.preventDefault();

	document
		.querySelector(target.getAttribute("href"))
		.scrollIntoView({ behavior: "smooth" });
});

// Hambuerger menu click/toggle effect

document.addEventListener("DOMContentLoaded", () => {
	const hamburgerIcon = document.querySelector(".mobile-navbar__hamburger");
	const mobileNavbarMenu = document.querySelector(".mobile-navbar__menu");

	hamburgerIcon.addEventListener("click", () => {
		mobileNavbarMenu.classList.toggle("hidden");
		mobileNavbarMenu.classList.toggle("active");
	});

	const formSubmitButton = document.querySelector(
		".contact-section__submit-button"
	);

	formSubmitButton.addEventListener("submit", () => {
		const form = document.querySelector(".contact-section__form");

		form.reset();
	});
});
