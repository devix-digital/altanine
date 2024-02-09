import Highway from '@dogstudio/highway';
import {splitText} from '../../common/splitText.js';
import {loadContent} from '../../common/loadContent.js';
import {parallax} from '../../common/parallax.js';
import {initBlogCarousel} from '../../modules/carousels/blogCarousel.js';

class BlogRenderer extends Highway.Renderer {
	onEnter() {
		splitText();
		console.log('Entering on About page');
	}
	onEnterCompleted() {
		loadContent();
		parallax();
		initBlogCarousel();
		console.log('Completed Enter on About page');
	}
}

export default BlogRenderer;