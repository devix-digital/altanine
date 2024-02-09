import Highway from '@dogstudio/highway';
import {initHeroCarousel} from '../../modules/carousels/heroCarousel.js';
import {initAccordion} from '../../modules/accordion/initAccordion.js';
import {initProcessCarousel} from '../../modules/carousels/processCarousel.js';
import {initBlogCarousel} from '../../modules/carousels/blogCarousel.js';
import {cardsMouseFollow} from '../../modules/benefits/cardsMouseFollow.js';
import {scrollTo} from '../../common/scrollTo.js';
import {loadContent} from '../../common/loadContent.js';
import {splitText} from '../../common/splitText.js';
import {parallax} from '../../common/parallax.js';

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		splitText();
		console.log('Entering on Home page');
	}
	onEnterCompleted() {
		scrollTo();
		loadContent();
		parallax();
		initHeroCarousel();
		initAccordion();
		initProcessCarousel();
		initBlogCarousel();
		cardsMouseFollow();
		console.log('Completed Enter on Home page');
	}
}

export default HomeRenderer;