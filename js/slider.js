class Slider {
	constructor() {
		this.slider1();
		// this.gallery()
	}

	slider1 = () => {
		$('.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			dots: true,
			cssEase: 'linear',
			infinite: true,
			autoplaySpeed: 3000,
			prevArrow: `<i class="fa fa-chevron-left left-arrow"></i>`,
			nextArrow: `<i class="fa fa-chevron-right right-arrow"></i>`,

			// taking care of responsiveness
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 580,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						prevArrow: false,
						nextArrow: false,
					},
				},
			],
		});
	};
}
