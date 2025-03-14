'use strict';

import './sass/main.scss';
import { handleBannerAnimation } from './js/_banner';
import { handleFooterUnusableLinks } from './js/_footer';
import { burgerBtn, handleNav, toggleNavigation } from './js/_navigation';

const prepareDOMEvents = () => {
	window.addEventListener('load', handleBannerAnimation);
	window.addEventListener('resize', handleBannerAnimation);
	window.addEventListener('scroll', handleBannerAnimation);
	window.addEventListener('scroll', toggleNavigation);

	if (burgerBtn) {
		burgerBtn.addEventListener('click', handleNav);
	}

	handleFooterUnusableLinks();
};

document.addEventListener('DOMContentLoaded', prepareDOMEvents);
