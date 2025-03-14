'use strict';

export const banner = document.querySelector('.banner');
const bannerText = document.querySelectorAll('.banner__text-list');
const bannerTextBorder = document.querySelector('.banner__text-border');

export const animateText = () => {
	if (!bannerTextBorder || bannerText.length === 0) return;

	bannerTextBorder.classList.remove('animation-large-active');
	bannerText.forEach(text => {
		text.classList.add('animation-small-active');
		text.classList.remove('animation-large-active');
	});
};

export function animateTextWithBorder() {
	if (!bannerTextBorder || bannerText.length === 0) return;

	if (isInViewport(banner)) {
		bannerTextBorder.classList.add('animation-large-active');
		bannerText.forEach(text => {
			text.classList.add('animation-large-active');
			text.classList.remove('animation-small-active');
		});
	}
}

export function isInViewport(item) {
	const bounding = item.getBoundingClientRect();
	return (
		bounding.top >= -item.offsetHeight &&
		bounding.left >= -item.offsetWidth &&
		bounding.right <= window.innerWidth + item.offsetWidth &&
		bounding.bottom <= window.innerHeight + item.offsetHeight
	);
}
