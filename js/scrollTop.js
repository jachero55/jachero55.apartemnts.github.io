class ScrollTop {
	constructor() {
		this.scrollTop();
		this.scrollFunc();
	}

	scrollFunc = () => {
		window.onscroll = () => {
			let scrollBtn = document.querySelector('.scroll-top');
			if (
				document.body.scrollTop > 90 ||
				document.documentElement.scrollTop > 90
			) {
				scrollBtn.style.display = 'block';
			} else {
				scrollBtn.style.display = 'none';
			}
		};
	};

	scrollTop = () => {
		document.querySelector('.scroll-top').addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	};
}
