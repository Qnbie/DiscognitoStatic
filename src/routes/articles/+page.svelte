<script lang="ts">
  let { data } = $props();
</script>

<section class="justify-center">
  <div class="w-full pt-30 flex flex-col justify-start items-center h-screen">
    <div class="flex w-full justify-center">
      <h1>Articles</h1>
    </div>
    <div class="flex flex-col h-fit w-full p-6 gap-6">
      {#each data.posts as post}
        <div>
          <h3><a href="/articles/{post.slug}" class="title">{post.title}</a></h3>
          <p class="date">{post.date}</p>
          <p class="description">{post.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
