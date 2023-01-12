class Services {
	constructor() {
		console.log('Services here');
		this.getServices();
		this.ui = new Ui();
	}

	getServices = async () => {
		try {
			let response = await fetch(
				'https://raw.githubusercontent.com/jachero55/jachero55.apartemnts.github.io/main/js/data.json'
			);
			let data = await response.json();
			let services = await data.services;
			this.ui.displayServices(services);
		} catch (e) {
			console.log(e);
		}
	};
}
