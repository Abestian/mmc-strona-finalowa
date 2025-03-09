'use strict';

import './sass/main.scss';

const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const eyecatcher = document.querySelector('.eyecatcher');
const movingText = document.querySelector('.eyecatcher__moving-text');
const navItems = document.querySelectorAll('.nav-link');
const footerLinks = document.querySelectorAll('.footer-link');

const handleNav = () => {
	navMobile.classList.toggle('nav-active');
	burgerBtn.classList.toggle('burger-active');
	navMobile.style.visibility = 'visible';
	closeNav();
};

const closeNav = () => {
	navItems.forEach(item =>
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-active');
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
