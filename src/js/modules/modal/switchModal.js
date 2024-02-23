import Tween from 'gsap';

export const switchModal = (modalId, status) => {
	if (modalId === '' && !status) {
		closeAllModals();
	} else {
		const modal = document.querySelector(`${modalId}`);
		if (status) {
			Tween.set(modal, {
				display: 'block',
				onComplete: () => {
					Tween.fromTo(modal,
						{
							opacity: 0,
						},
						{
							opacity: 1,
							duration: 0,
							ease: 'none',
						});
				}
			});
		} else {
			Tween.fromTo(modal,
				{
					opacity: 1,
				},
				{
					opacity: 0,
					duration: 0,
					ease: 'none',
					onComplete: () => {
						setTimeout(() => Tween.set(modal, { display: 'none' }), 500);
					}
				});
		}
	}
}

const closeAllModals = () => {
	const modals = document.querySelectorAll('.modal');
	for (let modal of modals) {
		Tween.to(modal, {
			opacity: 0,
			duration: 0,
			ease: 'none',
			onComplete: () => {
				Tween.set(modal, { display: 'none' });
			}
		});
	}
}