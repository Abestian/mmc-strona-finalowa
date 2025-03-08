'use strict';

import './sass/main.scss';

const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const eyecatcher = document.querySelector('.eyecatcher');
const movingText = document.querySelector('.eyecatcher__moving-text');

const handleNav = () => {
	navMobile.classList.toggle('nav-active');
	burgerBtn.classList.toggle('burger-active');
	navMobile.style.visibility = 'visible';
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

burgerBtn.addEventListener('click', handleNav);

window.addEventListener('scroll', function () {
	if (isInViewport(eyecatcher)) {
		movingText.classList.add('animation');
	}
});
