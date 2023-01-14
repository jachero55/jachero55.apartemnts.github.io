class Slider {
	constructor() {
		this.slider1();
		// this.gallery()
	}

	slider1 = () => {
	  $('.center').slick({
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 3,
      autoplay: true,
      dots: true,
      cssEase: 'linear',
		  infinite: true,
		  autoplaySpeed: 3000,
		  prevArrow: `<i class="fa-solid fa-arrow-left-long"></i>`,
		  nextArrow: `<i class="fa-solid fa-arrow-right-long"></i>`,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
    });
		// $('.slider').slick({
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// 	autoplay: true,
		// 	dots: true,
		// 	cssEase: 'linear',
		// 	infinite: true,
		// 	autoplaySpeed: 3000,
		// 	prevArrow: `<i class="fa fa-chevron-left left-arrow"></i>`,
		// 	nextArrow: `<i class="fa fa-chevron-right right-arrow"></i>`,

		// 	responsive: [
		// 		{
		// 			breakpoint: 992,
		// 			settings: {
		// 				slidesToShow: 3,
		// 				slidesToScroll: 3,
		// 				infinite: true,
		// 				dots: true,
		// 			},
		// 		},
		// 		{
		// 			breakpoint: 600,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				slidesToScroll: 1,
		// 			},
		// 		},
		// 		{
		// 			breakpoint: 580,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				slidesToScroll: 1,
		// 				prevArrow: false,
		// 				nextArrow: false,
		// 			},
		// 		},
		// 	],
		// });
	};
}
