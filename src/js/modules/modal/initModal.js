import {switchModal} from './switchModal.js';

export const initModal = () => {
	const closeElements = document.querySelectorAll('[data-modal-close]');
	const openElements = document.querySelectorAll('[data-modal-open]');
	
	/* close */
	if (closeElements.length) {
		for (let closeElement of closeElements) {
			closeElement.addEventListener('click', () => {
				const modalId = closeElement.dataset.modalClose;
				switchModal(modalId, false);
			});
		}
	}
	
	/* open */
	if (openElements.length) {
		for (let openElement of openElements) {
			openElement.addEventListener('click', () => {
				const modalId = openElement.dataset.modalOpen;
				switchModal(modalId, true);
			})
		}
	}
}