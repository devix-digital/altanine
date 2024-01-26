import Tween from 'gsap';
import {transition} from '../config/transitions.js';

export const showSplitWords = () => {
	const rows = document.querySelectorAll('[data-split-text]');
	if (rows.length) {
		for (let row of rows) {
			const words = row.querySelectorAll('.word');
			for (let word of words) {
				Tween.to('.word', {
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: transition.skew.duration,
					ease: transition.skew.ease,
				});
      }
		}
	}
}