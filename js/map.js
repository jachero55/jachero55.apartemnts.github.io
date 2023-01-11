class MapLocation {
	constructor() {
		console.log('Map is here');
		this.initMap();
	}

	initMap = () => {
		let map;
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});

		window.initMap = initMap;
	};
}
