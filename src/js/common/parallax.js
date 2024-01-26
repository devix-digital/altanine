import Tween, { gsap } from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Ukiyo from 'ukiyojs';
import {transition} from '../config/transitions.js';

gsap.registerPlugin(ScrollTrigger);

export const parallax = () => {
	const els = document.querySelectorAll('[data-parallax]');
	els.forEach((el) => {
		new Ukiyo(el, {
			scale: 1.2,
			willChange: true,
		});
	});
	
	/* parallax for content section */
	let contentTl = Tween.timeline({
		scrollTrigger: {
			trigger: '.content',
			start: 'top 50%',
		}
	});
	contentTl.to('.show-on-scroll', {
		y: 0,
		duration: transition.skew.duration,
		ease: transition.skew.ease,
	});
	
	/* parallax for investigations section */
	let investigationsTl = Tween.timeline({
		scrollTrigger: {
			trigger: '.investigations',
		}
	});
	investigationsTl.to('.certificates-column', {
		y: 0,
		duration: transition.skew.duration,
		ease: transition.skew.ease,
	});
}