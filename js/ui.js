class Ui {
	constructor() {
		console.log('Ui here');
		this.displayServices();
		this.displayPosts();
	}

	// Displace services
	displayServices = async (services) => {
		let serviceArray = [];
		this.serviceArray = services;
		serviceArray = await services;
		const data = document.querySelector('.services-flex');
		let result = '';
		await serviceArray.forEach((service) => {
			result += `
      <div class="card">
        <div class="image-container">
          <img src=${service.image} alt="house" />
        </div>
        <div class="card-info">
            <h4>${service.title}</h4>
        </div>
      </div>
      `;
			data.innerHTML = result;
		});
	};

	// Display posts
	displayPosts = async (posts) => {
		// let postArray = [];
		// this.postArray = posts;
		// postArray = await posts;
		// const postContainer = document.querySelector('.slider');
		// let result = '';
		// await postArray.forEach((post) => {
		// 	result += `
    //   <div class="slider-container">
    //       <img src=${post.image} alt="person" />
    //     <div class="slider-card-details">
    //       <h4>${post.title}</h4>
    //       <p>${post.description}</p>
    //       <span>${post.date}</span>
    //     </div>
    //   </div>
    //   `;
		// 	postContainer.innerHTML = result;
		// });
		// console.log('posts', postArray);
	};
}
