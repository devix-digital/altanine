function openModal(modalId) {
	const modal = document.querySelector(modalId);
	if (modal) {
		modal.style.display = 'block';
		setTimeout(function () {
			modal.style.opacity = '1';
		}, 200);
	}
}

function closeModal(modalId) {
	if (modalId === '') {
		const modals = document.querySelectorAll('.modal');
		for (let modal of modals) {
			close(modal);
		}
	} else {
		const modal = document.querySelector(modalId);
		if (modal) {
			close(modal);
		}
	}
}

const close = (modal) => {
	modal.style.opacity = '0';
	setTimeout(function () {
		modal.style.display = 'none';
	}, 500);
}

