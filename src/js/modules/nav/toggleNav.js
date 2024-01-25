import Tween from 'gsap';

export const initMobileNavigation = () => {
	const burger = document.querySelector('.burger');
	if (burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('is-active') ? toggleNav(false) : toggleNav(true);
		});
	}
}

export const toggleNav = (status) => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header-panel-nav');
	if (status) {
		burger.classList.add('is-active');
		Tween.set(nav, {
			display: 'block',
			opacity: 0,
		});
		Tween.to(nav, {
      opacity: 1,
			onComplete: () => {
				nav.classList.add('is-active');
			}
    });
	} else {
		burger.classList.remove('is-active');
		Tween.to(nav, {
			opacity: 0,
			onComplete: () => {
				nav.classList.remove('is-active');
				Tween.set(nav, {
					display: 'none',
				});
			}
		});
	}
}

window.addEventListener('scroll', () => {
	toggleNav(false);
});