class Forms {
	constructor() {
		console.log('Form is up!!!');
		this.appointmentForm();
		this.closeAppointmentForm();
		this.appointmentSubmit();
	}

	appointmentForm = () => {
		const appointment = document.querySelector('.appointment-form');
		document
			.querySelector('.appointment-booking button')
			.addEventListener('click', () => {
				appointment.classList.add('show-form');
			});
	};

	closeAppointmentForm = () => {
		const appointment = document.querySelector('.appointment-form');
		document.querySelector('.close').addEventListener('click', () => {
			appointment.classList.remove('show-form');
		});
	};

	appointmentSubmit = (e) => {
		const appointment = document.querySelector('.appointment-form');
		const frm = document.querySelector('.appointment-form form');
		document
			.querySelector('.frm-appointment button')
			.addEventListener('click', (e) => {
				e.preventDefault();
				const userPost = {
					// avatar: document.querySelector("#file").value,
					firstName: document.querySelector('#firstname').value,
					lastName: document.querySelector('#lastname').value,
					email: document.querySelector('#email').value,
					date: document.querySelector('#appointment').value,
				};
				console.log(userPost);
				appointment.classList.remove('show-form');
				frm.reset('');
			});
	};
}
