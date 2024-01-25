import Tween from 'gsap';
import {transition} from '../../config/transitions.js';

export const initFooterAbstractMoving = () => {
	const footer = document.querySelector('.footer');
	if (footer) {
		const abstract = footer.querySelector('.footer-abstract');
		if (abstract) {
			footer.addEventListener('mousemove', (event) => {
				const { offsetX, offsetY } = event;
				Tween.to(abstract, {
					x: offsetX / 10,
          y: offsetY / 5,
          duration: transition.move.duration,
          ease: 'linear',
				})
			});
		}
	}
}