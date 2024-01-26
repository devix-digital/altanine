import Highway from '@dogstudio/highway';
import Fade from './transitions/fade.js';
import HomeRenderer from './renderers/home.js';
import AboutRenderer from './renderers/about.js';

export const router = new Highway.Core({
	renderers: {
		home: HomeRenderer,
		about: AboutRenderer,
	},
  transitions: {
    default: Fade,
  },
})