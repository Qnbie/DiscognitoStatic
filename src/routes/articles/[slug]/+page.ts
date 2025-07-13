import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    console.log(post.default);

    return {
      PostContent: post.default,
      meta: post.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
};
