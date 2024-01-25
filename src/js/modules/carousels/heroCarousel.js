import Splide from '@splidejs/splide';
import {setProgressBar} from '../progress/progressbar.js';

export const initHeroCarousel = () => {
	const heroCarousel = document.querySelector('#hero-carousel');
	const progressBar = document.querySelector('#hero-progress-bar');
	if (heroCarousel) {
		const slides = heroCarousel.querySelectorAll('.full-carousel-slide');
		
		const splide = new Splide(heroCarousel, {
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
		
		// splide.on('mounted', () => {
		// 	stopAllVideos(heroCarousel);
		// 	slides[0].querySelector('.video').play();
		// });
		
		splide.mount();
		/* fill after each slide change */
		splide.on( 'autoplay:playing', function (rate) {
			setProgressBar(progressBar, rate)
		});
		
		// splide.on('moved', (a, b, c, d) => {
		// 	stopAllVideos(heroCarousel);
		// 	slides[a].querySelector('.video').play();
		// });
	}
}

// const stopAllVideos = (carousel) => {
// 	const videos = carousel.querySelectorAll('.video');
//   for (let video of videos) {
// 		video.pause();
// 		video.currentTime = 0;
//   }
// }