import axios, { AxiosError } from 'axios';

export async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching posts:', (error as Error).message);
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
}
