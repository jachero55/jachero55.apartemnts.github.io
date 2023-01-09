class FormValidation {
	constructor() {}
	checkFirstName = () => {
		const constraints = {
			Fname: [
				'^(CH-)?\\d{4}$',
				'First name must have more than three characters!',
			],
		};
	};
}
