class Services {
	constructor() {
		console.log('Services here');
		this.getServices();
		this.ui = new Ui();
	}

	getServices = async () => {
		try {
			let response = await fetch('./data.json');
			let data = await response.json();
			console.log('Getting Services', data);
			let services = data.services;
			this.ui.displayServices(services);
		} catch (e) {
			console.log(e);
		}
	};
}
