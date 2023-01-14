class Navbar {
	constructor() {
		console.log('Navbar');
		this.navToggle()
	}
	
	// navToggle = () => {
	// 	const mobile = document.querySelector('nav ul');
	// 	document.querySelector('#menu-btn').addEventListener('click', ()=> {
	// 	  mobile.classList.add('nav-items')
	// 	});
	// };

	navToggle = () => {
		const mobile = document.querySelector('nav ul');
		document.querySelector('#menu-btn').addEventListener('click', ()=> {
		  mobile.classList.toggle('nav-items')
		});
	};
	
}
