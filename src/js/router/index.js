import Highway from '@dogstudio/highway';
import Fade from './transitions/fade.js';
import HomeRenderer from './renderers/home.js';

export const router = new Highway.Core({
	renderers: {
		home: HomeRenderer,
	},
  transitions: {
    default: Fade,
  },
})