'use strict';

import './sass/main.scss';

const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');

const handleNav = () => {
	navMobile.classList.toggle('nav-active');
	burgerBtn.classList.toggle('burger-active');
	navMobile.style.visibility = 'visible';
};

burgerBtn.addEventListener('click', handleNav);
