import { IPost, getPosts } from './Posts';
import capitalizeTitles from 'LegacyModule';
async function filterPosts() {
	const userId: number = 1;
	const posts = await getPosts();
	console.log('posts?.data.length', posts?.data.length);
	const filteredPosts: IPost[] = posts.data.filter((p: IPost) => p.userId === userId);
	console.log('filteredPosts.length', filteredPosts.length);
	const test = capitalizeTitles(filteredPosts);
	console.log('test', test);
}

filterPosts();