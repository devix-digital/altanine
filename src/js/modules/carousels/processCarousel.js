import Splide from '@splidejs/splide';
import {setProgressBar} from '../progress/progressbar.js';

export const initProcessCarousel = () => {
	/* banners */
	const processBannersCarousel = document.querySelector('#process-carousel');
	const processDescriptorsCarousel = document.querySelector('#process-description-carousel');
	const progressBar = document.querySelector('#process-progress-bar');
	const processPaginationCurrent = document.querySelector('#progress-pagination-current');
	const processPaginationTotal = document.querySelector('#progress-pagination-total');
	const carouselsMover = document.querySelector('#process-carousel-mover');
	
	if (processBannersCarousel && processDescriptorsCarousel) {
		const bannersSplide = new Splide(processBannersCarousel, {
			type: 'fade',
			rewind: true,
			drag: false,
			perPage: 1,
			pagination: false,
			arrows: false,
			autoWidth: false,
			speed: 1000,
			easing: 'linear',
			autoplay: true,
			interval: 4000,
		});
		
		bannersSplide.on('mounted', () => {
			processBannersCarousel.querySelectorAll('.full-carousel-slide');
			processPaginationTotal? processPaginationTotal.innerHTML = `${bannersSplide.length}` : 1;
		});
		
		bannersSplide.on('moved', (newIndex) => {
			processPaginationCurrent ? processPaginationCurrent.innerHTML = `${newIndex + 1}` : 1;
		})
		
		bannersSplide.mount();
		
		/* fill after each slide change */
		bannersSplide.on( 'autoplay:playing', function (rate) {
			setProgressBar(progressBar, rate)
		});
	
		const descriptionSplide = new Splide(processDescriptorsCarousel, {
			type: 'fade',
      rewind: true,
      drag: false,
      perPage: 1,
      pagination: false,
      arrows: false,
      autoWidth: false,
      speed: 500,
      easing: 'linear',
      // autoplay: true,
			updateOnMove: true,
      interval: 4000,
			pauseOnFocus: false,
			pauseOnHover: false,
		});
		descriptionSplide.mount();
		
		if (carouselsMover) {
			carouselsMover.addEventListener('click', () => {
        bannersSplide.go('>');
        descriptionSplide.go('>');
      });
		}
	}
	
}