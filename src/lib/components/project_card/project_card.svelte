<script lang="ts">
  import TagButton from './tag_button.svelte';
  import type { Post } from '$lib/types';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();

  function hasBlogPage() {
    return post.slug;
  }

  function hasGithubPage() {
    return post.github_link;
  }

  function hasTags() {
    return post.tags;
  }
</script>

<div class="w-[350px] h-[400px] mx-2 p-3">
  <div
    class="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 h-full"
  >
    <div class="corner-piece corner-topleft"></div>
    <div class="corner-piece corner-topright"></div>
    <div class="corner-piece corner-bottomleft"></div>
    <div class="corner-piece corner-bottomright"></div>

    <div class="flex-col justify-start h-2/3">
      <h2 class="text-3xl font-bold mb-2">{post.title}</h2>
      <h3 class="text-2xl font-semibold mb-6 gradient-text">
        {post.sub_title}
      </h3>
      <p class="text-lg mb-8">{post.description}</p>
    </div>

    <div class="flex flex-col justify-end h-1/3">
      <div class="flex-row">
        {#if hasTags()}
          <ul class="flex flex-wrap gap-3">
            {#each post.tags as tag}
              <TagButton buttonTitle={tag} />
            {/each}
          </ul>
        {/if}
      </div>

      <div class="flex flex-row my-2 gap-2">
        {#if hasBlogPage()}
          <a
            href="/articles/{post.slug}"
            class="group inline-flex button-rounded gradient-horizontal hover:opacity-90 transition-opacity text-center text-text-primary-dark"
            >Blog Post</a
          >
        {/if}
        {#if hasGithubPage()}
          <a
            href={post.github_link}
            class="group inline-flex button-rounded border border-gray-700 hover:border-accent-dark transition-colors text-text-primary-dark"
            >Github</a
          >
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  .corner-piece {
    @apply absolute w-20 h-20 border-accent-dark;
  }

  .corner-topleft {
    @apply top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl border-secondary-dark;
  }
  .corner-topright {
    @apply top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl;
  }
  .corner-bottomleft {
    @apply bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl;
  }
  .corner-bottomright {
    @apply bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl;
  }
</style>
