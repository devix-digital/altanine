import Splide from '@splidejs/splide';
import {carouselCursorFollow} from './carouselCursorFollow.js';

export const initBlogCarousel = () => {
	const blogCarousel = document.querySelector('#blog-carousel');
 
  if (blogCarousel) {
    const splide = new Splide(blogCarousel, {
      type: 'slide',
      rewind: true,
      drag: 'free',
      perPage: 1,
      pagination: false,
      arrows: false,
      autoWidth: true,
      speed: 5000,
      easing: 'linear',
	    gap: '32rem',
      padding: { left: '64rem', right: '64rem' },
      breakpoints: {
        767: {
          padding: { left: '24rem', right: '24rem' },
          gap: '24rem',
        },
      }
    });
    
    splide.on('mounted', () => {
      carouselCursorFollow(blogCarousel);
    });
    
    splide.mount();
  }
}