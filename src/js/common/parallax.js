import Tween, { gsap } from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Ukiyo from 'ukiyojs';
import {transition} from '../config/transitions.js';

gsap.registerPlugin(ScrollTrigger);

export const parallax = () => {
	const els = document.querySelectorAll('[data-parallax]');
	els.forEach((el) => {
		const parallax = new Ukiyo(el, {
			scale: 1.2,
			willChange: true,
		});
	});
	
	const banner = document.querySelector('.content-banner');
	
	const bannerTl = Tween.timeline({
		scrollTrigger: {
			trigger: document.querySelector('.content'),
			scrub: true,
			start: 'top center',
		}
	});
	
	bannerTl.from(banner, {
		y: 100,
	}).to(banner, {
		y: 0,
		duration: transition.skew.duration,
		ease: transition.skew.ease,
	});
}