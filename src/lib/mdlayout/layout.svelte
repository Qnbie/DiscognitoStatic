<script lang="ts">
  export let title: string;
  export let date: string;
  export let author: string;
  export let reading_time: string;
</script>

<article class="flex flex-col content-center justify-center w-full divide-y divide-accent-dark">
  <div>
    <h1 class="article-margin">{title}</h1>
    <div class="text-sm article-margin">
      <p>Published on: {date}</p>
      <p>Author: {author}</p>
      <p>Reading time: {reading_time}</p>
    </div>
  </div>

  <div class="article-margin w-full">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </div>
</article>

<style lang="postcss">
  @reference "tailwindcss";

  .article-margin {
    @apply my-4 mx-4 md:mx-6 lg:mx-8 xl:mx-10;
  }
</style>
