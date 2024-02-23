import Tween from 'gsap';
import {transition} from '../../config/transitions.js';

export const initHover = () => {
	const buttons = document.querySelectorAll('.btn:not(.is-active):not(.btn-arrow)');
	// const buttonsLines = document.querySelectorAll('.btn-line:not(.is-active)');
	if (buttons.length) {
		for (const button of buttons) {
			const labels = button.querySelectorAll('.btn-labels-item');
			const bg = button.querySelector('.btn-bg');
			
			button.addEventListener('mouseenter', (e) => {
				animateLabel(labels[0], '0', '-100%', 1, 0);
				animateLabel(labels[1], '100%', '0', 0, 1);
				animateLabel(labels[2], '200%', '100%', 0, 1);
      });
			
			button.addEventListener('mouseleave', () => {
				animateLabel(labels[0], '-100%', '-200%', 0, 1);
				animateLabel(labels[1], '0', '-100%', 1, 0);
				animateLabel(labels[2], '100%', '0', 0, 1);
				
				bg ? animateBackground(bg, { scale: 0 }) : null;
      });
			
			if (bg) {
				button.addEventListener('mousemove', ({offsetY, offsetX}) => {
					const distance = button.getBoundingClientRect().width;
					animateBackground(bg, {
						top: offsetY - (distance / 2),
						left: offsetX - (distance / 2),
						width: distance,
						height: distance,
						scale: 2,
					});
				});
			}
		}
	}
}

const animateLabel = (label, fromY, toY, fromOpacity, toOpacity) => {
	Tween.fromTo(
		label,
		{ y: fromY, opacity: fromOpacity },
		{
			y: toY,
			opacity: toOpacity,
			duration: transition.move.duration,
			ease: transition.move.ease,
		}
	);
};

const animateBackground = (bg, options) => {
	Tween.to(bg, {
		...options,
		duration: transition.scale.duration,
		ease: transition.scale.ease,
	});
};