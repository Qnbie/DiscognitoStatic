<script lang="ts">
  import ProjectCard from '../project_card/project_card.svelte';
  import type { Post } from '$lib/types';

  interface Props {
    posts: Post[];
  }

  let { posts }: Props = $props();
</script>

<section class="home-page-section">
  <div class="w-full flex flex-col justify-center items-center xl:h-screen h-[1000px]">
    <h2 class="title-size">Recent Activities</h2>
    <div class="flex">
      {#each posts as post: Post}
        <ProjectCard {post} />
      {/each}
    </div>
  </div>
</section>
