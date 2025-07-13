import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(event: any) {
  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      post.published && posts.push(post);
    }
  }

  var tag: string = event.url.searchParams.get('tag');
  var latest_num: number = event.url.searchParams.get('latest');

  console.log(tag);
  console.log(latest_num > posts.length? posts.length: latest_num);
  
  

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  if (tag) {
    posts = posts.filter((post: Post) => post.tags && post.tags.includes(tag));
  }

  if (latest_num) {
    return posts.slice(0, latest_num > posts.length? posts.length : latest_num);
  }

  return posts;
}

export async function GET(event: any) {
  const posts = await getPosts(event);
  return json(posts);
}
