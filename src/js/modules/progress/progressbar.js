import Tween from 'gsap';

export const startProgressBar = (progressId) => {
	if (progressId) {
		const follower = progressId.querySelector('.progress-bar-follower');
		Tween.fromTo(follower,
			{
				width: 0,
			},
			{
				width: '100%',
				duration: 4,
				ease: 'linear',
			});
	}
}

export const setProgressBar = (progressId, value) => {
	if (progressId) {
		const follower = progressId.querySelector('.progress-bar-follower');
		Tween.set(follower, {
			width: `${value * 100}%`
		})
	}
}