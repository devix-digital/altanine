import { Power1, Power3 } from 'gsap';

export const transition = {
	move: {
		duration: 0.6,
    ease: Power3.easeOut,
	},
	scale: {
		duration: 1,
    ease: Power3.easeOut,
	},
	opacity: {
    duration: 0.5,
    ease: Power3.easeOut,
  },
	skew: {
		duration: 1,
    ease: Power1.easeOut,
	}
}