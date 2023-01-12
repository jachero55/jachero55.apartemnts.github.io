class App {
	constructor() {
		this.slider = new Slider();
		this.form = new Forms();
		this.modal = new Modal();
		this.services = new Services();
		this.gallery = new Gallery();
		this.blog = new Blog();
		// this.map = new MapLocation()
	}

	// Implement singleton
	// condition to check if controller instance already created
	// If there's no instance, we create one
	static getInstance = () => {
		if (!App._instance) {
			App._instance = new App();
			return App._instance;
		} else {
			// Throw an error if one already exits
			throw 'There can only be one instance of an APP!!!';
		}
	};
}

// self executing method
(() => {
	const app = App.getInstance();
})();
