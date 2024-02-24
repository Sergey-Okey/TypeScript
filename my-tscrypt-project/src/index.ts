import { filter } from 'lodash';
import { IPost, getPosts } from './Posts';
import capitalizeTitles from './LegacyModule';


(async function filterPosts() {
  const userId: number = 1;
  const posts = await getPosts();
  console.log('posts?.length', posts?.length);

  const filteredPosts: IPost[] = filter(posts, (p: IPost) => p.userId === userId);
  console.log('filteredPosts.length', filteredPosts.length);

  const test = capitalizeTitles(filteredPosts);
  console.log('test', test);
})();
