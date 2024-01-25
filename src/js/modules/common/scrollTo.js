export const scrollTo = () => {
	const scrollButtons = document.querySelectorAll('.scroll-action');
	if (scrollButtons.length) {
		scrollButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = document.querySelector(button.dataset.target);
        if (target) {
          // window.scrollTo(0, target.offsetTop);
	        target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
	}
}