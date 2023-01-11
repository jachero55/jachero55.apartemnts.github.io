class Forms {
	constructor() {
		console.log('Form is up!!!');
		this.appointmentForm();
		this.closeAppointmentForm();
		this.appointmentSubmit();
	}

	appointmentForm = () => {
		const appointment = document.querySelector('.appointment-form');
		document.querySelectorAll('.schedule-btn').forEach((btn) => {
			btn.addEventListener('click', () => {
				appointment.classList.add('showForm');
			});
		});
	};

	closeAppointmentForm = () => {
		const appointment = document.querySelector('.appointment-form');
		document.querySelector('.close').addEventListener('click', () => {
			appointment.classList.remove('showForm');
		});
	};

	appointmentSubmit = (e) => {
		const appointment = document.querySelector('.appointment-form');
		const frm = document.querySelector('.appointment-form form');
		document
			.querySelector('.frm-appointment button')
			.addEventListener('click', (e) => {
				e.preventDefault();
				const appointmentDetails = {
					// avatar: document.querySelector("#file").value,
					firstName: document.querySelector('#firstname').value,
					lastName: document.querySelector('#lastname').value,
					email: document.querySelector('#email').value,
					make: document.querySelector('#car').value,
					color: document.querySelector('#color').value,
					date: document.querySelector('#appointment').value,
				};
				console.log(appointmentDetails);

				const userDetails = [];
				userDetails.push(appointmentDetails);

				let result = '';
				userDetails.forEach((myData) => {
					const overlay = document.querySelector('.success-modal-overlay');
					result += `
          <div class="success-container">
          <div class="success-top">
            <span><i class="fa fa-check"></i></span>
            <h3>Success</h3>
          </div>
          <div class="success">
            <h3>Your Service Details</h3>
            <p>Full Name: <span>${myData.firstName} +' '+ ${myData.lastName}</span></p>
            <p>Email: <span>${myData.email}</span></p>
            <p>Make: <span>${myData.make}</span></p>
            <p>Color: <span>${myData.color}</span></p>
            <p>Date: <span>${myData.date}</span></p>
          </div>
          <div class="success-footer">
            <p>Confirmation sent to your email</p>
          </div>
        </div>
      `;
					overlay.innerHTML = result;
				});
				appointment.classList.remove('showForm');
				document.forms[0].reset();
			});
	};
}
