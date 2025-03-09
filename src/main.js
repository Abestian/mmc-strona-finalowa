'use strict';

import './main.scss';

// nav
const navbar = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.navbar__burger');
const navMobile = document.querySelector('.navbar-mobile');
const navItems = document.querySelectorAll('.navbar-mobile__link');

const eyecatcher = document.querySelector('.eyecatcher');
const movingText = document.querySelector('.eyecatcher__moving-text');

const footerLinks = document.querySelectorAll('.footer-link');

const handleNav = () => {
	navMobile.classList.toggle('navbar-mobile-active');
	burgerBtn.classList.toggle('burger-active');
	closeNav();
};

const closeNav = () => {
	navItems.forEach(item =>
		item.addEventListener('click', () => {
			navMobile.classList.remove('navbar-mobile-active');
			burgerBtn.classList.remove('burger-active');
		})
	);
};

function isInViewport(item) {
	const bounding = item.getBoundingClientRect();
	return (
		bounding.top >= -item.offsetHeight &&
		bounding.left >= -item.offsetWidth &&
		bounding.right <= window.innerWidth + item.offsetWidth &&
		bounding.bottom <= window.innerHeight + item.offsetHeight
	);
}

footerLinks.forEach(item => {
	item.addEventListener('click', e => {
		const link = e.target.innerHTML;
		e.preventDefault();
		alert(`Podstrona "${link}", do której chcesz się dostać, niestety nie istnieje. Przepraszamy za utrudnienia.`);
	});
});

burgerBtn.addEventListener('click', handleNav);

window.addEventListener('scroll', function () {
	if (isInViewport(eyecatcher)) {
		movingText.classList.add('animation');
	}
});

/* const prevScrollPos = window.scrollY;
window.onscroll = function () {
	const currentScrollPos = this.window.scrollY;
	if (prevScrollPos > currentScrollPos) {
		navbar.style.top = '0';
	} else {
		navbar.style.top = '-100px';
	}
	prevScrollPos = currentScrollPos;
}; */
