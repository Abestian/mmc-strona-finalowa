'use strict';

export const handleFooterUnusableLinks = () => {
	document.addEventListener('click', e => {
		const item = e.target.closest('.footer__link');
		if (!item) return;

		e.preventDefault();
		alert(
			`Podstrona "${item.innerHTML}", do której chcesz się dostać, niestety nie istnieje. Przepraszamy za utrudnienia.`
		);
	});
};
