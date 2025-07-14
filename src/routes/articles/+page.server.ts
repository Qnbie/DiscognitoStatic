import { page } from '$app/stores';
import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
  const tag = url.searchParams.get('tag');
  
  let path = '/api/posts';
  if (tag) {
    path += '?tag=' + tag;
  }

  const response = await fetch(path);
  const posts: Post[] = await response.json();
  return { posts };
};
