class Modal {
	constructor() {
		console.log('Modal');
		this.openModal();
		this.closeModal();
		this.closeModalOnEsc();
	}

	openModal = () => {
		const modal = document.querySelector('.success-modal-overlay');
		const mapModal = document.querySelector('.map-overlay');
		document
			.querySelector('.frm-appointment button')
			.addEventListener('click', () => {
				setTimeout(() => {
					modal.style.visibility = 'visible';
				}, 200);
			});

		document.querySelector('.my-location').addEventListener('click', () => {
			setTimeout(() => {
				mapModal.style.visibility = 'visible';
			}, 200);
		});
	};

	closeModal = () => {
		const modal = document.querySelector('.success-modal-overlay');
		const mapModal = document.querySelector('.map-overlay');
		document
			.querySelector('.success-modal-overlay')
			.addEventListener('click', () => {
				setTimeout(() => {
					modal.style.visibility = 'hidden';
				}, 200);
			});

		document.querySelector('.map-btn').addEventListener('click', () => {
			setTimeout(() => {
				mapModal.style.visibility = 'hidden';
			}, 200);
		});
	};

	closeModalOnEsc = () => {
		const modal = document.querySelector('.success-modal-overlay');
		const mapModal = document.querySelector('.map-overlay');
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				modal.style.visibility = 'hidden';
				mapModal.style.visibility = 'hidden';
			}
		});
	};
}
