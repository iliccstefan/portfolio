// Curent year in footer
const currentYear = document.querySelector('.current-year');

currentYear.textContent = new Date().getFullYear();

// Anchor link smooth scroll
document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('a[href^="#"]')) return;

    event.preventDefault();

    document.querySelector(target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});

//dark light mode
const mode = document.getElementById('theme-toggle');

mode.addEventListener('click', () => {
    const isModeDark = document.body.classList.contains('dark');

    if (isModeDark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
});

// Hambuerger menu click/toggle effect
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.mobile-navbar__hamburger');
    const mobileNavbarMenu = document.querySelector('.mobile-navbar__menu-container');

    hamburgerIcon.addEventListener('click', () => {
        /* mobileNavbarMenu.classList.toggle("hidden"); */
        mobileNavbarMenu.classList.toggle('active');
    });

    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        try {
            event.preventDefault();

            const name = document.querySelector('.contact-section__name-field').value.trim();
            const email = document.querySelector('.contact-section__email-field').value.trim();
            const message = document.querySelector('.contact-section__message-field').value.trim();
            const form = document.querySelector('.contact-section__form');
            const url = 'https://api.stefanilic.dev/api/v1/send-email';
            const method = 'POST';
            console.log(name, email, message);
            const body = JSON.stringify({ name, email, message });
            const response = await fetch(url, { method, 'Content-Type': 'application/json', body });

            const { error, responseMessage } = await response.json();

            if (error) {
                return;
            }

            form.reset();
        } catch (error) {
            console.error(error);
        }
    });
});

// My current age
const myBirthDate = new Date('1995-06-28');
const today = new Date();

const age = today.getFullYear() - myBirthDate.getFullYear();

const hasBirthdayPassed =
    today.getMonth() < myBirthDate.getMonth() ||
    (today.getMonth() === myBirthDate.getMonth() && today.getDate() < myBirthDate.getDate());

const myCurrentAge = document.querySelector('.my-current-age');

myCurrentAge.textContent = Boolean(hasBirthdayPassed) ? age - 1 : age;
