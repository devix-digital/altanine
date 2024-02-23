import Highway from '@dogstudio/highway';
import Fade from './transitions/fade.js';
import {updateScroll} from '../common/scroll.js';
import DefaultRenderer from './renderers/default.js';
import {toggleNav} from '../modules/nav/toggleNav.js';
import {initClock} from '../common/initClock.js';

export const router = new Highway.Core({
	renderers: {
		default: DefaultRenderer,
	},
  transitions: {
    default: Fade,
  },
});

router.on('NAVIGATE_IN', () => {
	updateScroll();
	console.log('NAVIGATE_IN');
});

router.on('NAVIGATE_OUT', () => {
	toggleNav(false);
	console.log('NAVIGATE_OUT')
});