'use strict';

import './sass/main.scss';
import { animateText, animateTextWithBorder, isInViewport, banner } from './js/banner';

const checkScreenSize = () => {
	const width = window.innerWidth;

	if (width > 620) {
		if (isInViewport(banner)) {
			animateTextWithBorder();
		}
	} else {
		animateText();
	}
};

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
window.addEventListener('scroll', checkScreenSize);

const navbar = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.navbar__burger');
const navMobile = document.querySelector('.navbar-mobile');
const navItems = document.querySelectorAll('.navbar-mobile__link');

const footerLinks = document.querySelectorAll('.footer__link');

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

footerLinks.forEach(item => {
	item.addEventListener('click', e => {
		const link = e.target.innerHTML;
		e.preventDefault();
		alert(`Podstrona "${link}", do której chcesz się dostać, niestety nie istnieje. Przepraszamy za utrudnienia.`);
	});
});

burgerBtn.addEventListener('click', handleNav);

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const isDesktop = document.documentElement.clientWidth > 992;
	const isBurgerActive = burgerBtn.classList.contains('burger-active');

	if (scrollTop > lastScrollTop) {
		if (isDesktop) {
			navbar.style.top = '-104px';
		} else {
			navbar.style.top = isBurgerActive ? '0' : '-57px';
		}
	} else {
		navbar.style.top = '0';
	}

	lastScrollTop = scrollTop;
});

/* window.onscroll = function (e) {
	const scrollCheck = this.oldScroll > this.scrollY;
	this.oldScroll = this.scrollY;

	let padding;

	if (scrollCheck) {
		document.documentElement.style.scrollPaddingTop = '55px';
	} else {
		document.documentElement.style.scrollPaddingTop = '0px';
	}
}; */
