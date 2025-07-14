<script lang="ts">
  interface Props {
    data: any;
  }

  let { data }: Props = $props();

  let {
    content,
    meta: { date, title }
  } = data;

  const { PostContent } = data;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section class="prose w-full pt-30">
  <PostContent />
</section>
