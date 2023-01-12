class Blog {
	constructor() {
		console.log('Blog here');
		this.getPosts()
		this.ui = new Ui();
	}

	getPosts = async () => {
		try {
			let response = await fetch(
				'https://raw.githubusercontent.com/jachero55/jachero55.apartemnts.github.io/main/js/data.json'
			);
			let data = await response.json();
			let posts = await data.blog;
			this.ui.displayPosts(posts)
			console.log("GET POSTS", posts)
		} catch (e) {
			console.log(e);
		}
	};
}
