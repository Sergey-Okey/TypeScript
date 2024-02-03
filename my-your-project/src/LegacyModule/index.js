function capitalizeTitles(posts) {
	return posts.map(post => {
		return {
			...post,
			title: post.title.toUpperCase()
		};
	});
}

module.exports = capitalizeTitles;