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
	const mobileNavbarMenu = document.querySelector(
		".mobile-navbar__menu-container"
	);

	hamburgerIcon.addEventListener("click", () => {
		/* mobileNavbarMenu.classList.toggle("hidden"); */
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

// My current age
const myBirthDate = new Date("1995-06-28");
const today = new Date();

const age = today.getFullYear() - myBirthDate.getFullYear();

const hasBirthdayPassed =
	today.getMonth() < myBirthDate.getMonth() ||
	(today.getMonth() === myBirthDate.getMonth() &&
		today.getDate() < myBirthDate.getDate());

const myCurrentAge = document.querySelector(".my-current-age");

myCurrentAge.textContent = Boolean(hasBirthdayPassed) ? age - 1 : age;
