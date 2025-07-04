<script lang="ts">
  import type { PageProps } from '../$types';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();

  let {
		content,
		meta: { date, title },
	} = data;

const { PostContent } = data;

  console.log(PostContent)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <div class="prose">
    <PostContent />
  </div>
</article>

<style lang="postcss">
  @reference "tailwindcss";

  .prose :is(h1) {
    @apply bg-amber-950;
  }
</style>
