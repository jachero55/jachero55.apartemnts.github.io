class Modal {
	constructor() {
		console.log('Modal');
		this.openModal();
		this.closeModal();
		this.closeModalOnEsc()
	}

	openModal = () => {
		const modal = document.querySelector('.success-modal-overlay');
		document
			.querySelector('.frm-appointment button')
			.addEventListener('click', () => {
				setTimeout(()=> {
          modal.style.visibility = 'visible';
				}, 200)
			});
	};

	closeModal = () => {
		const modal = document.querySelector('.success-modal-overlay');
		document
			.querySelector('.success-modal-overlay')
			.addEventListener('click', () => {
				setTimeout(()=> {
          modal.style.visibility = 'hidden';
				}, 200)
			});
	};

	closeModalOnEsc = () => {
		const modal = document.querySelector('.success-modal-overlay');
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				modal.style.visibility = 'hidden';
			}
		});
	};
}
