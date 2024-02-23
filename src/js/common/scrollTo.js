import {lenis} from './scroll.js';

export const scrollTo = () => {
	const scrollButtons = document.querySelectorAll('.scroll-action');
	if (scrollButtons.length) {
		scrollButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = document.querySelector(button.dataset.target);
        if (target) {
	        lenis.scrollTo(target, { duration: 1.5 });
        }
      });
    });
	}
}