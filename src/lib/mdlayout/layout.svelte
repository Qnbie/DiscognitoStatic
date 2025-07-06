<script lang="ts">
  export let title: string;
  export let date: string;
  export let author: string;
  export let reading_time: string;
</script>

<a href="/"> Home</a>

<article class="flex flex-col content-center justify-center w-1/2">
  <h1 class="m-4">{title}</h1>
  <div class="text-sm m-4">
    <p>Published on: {date}</p>
    <p>Author: {author}</p>
    <p>Reading time: {reading_time}</p>
  </div>

  <div>
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot></div>
</article>
