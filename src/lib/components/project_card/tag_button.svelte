<script lang="ts">
  let { buttonTitle } = $props();
</script>

<div class="button-rounded-small gradient-vertical-dim interactive border border-gray-700 items-center justify-center">
  <p>{buttonTitle}</p>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  .interactive {
    @apply hover:bg-gradient-to-r hover:from-accent-dark/10 hover:to-contrast-dark/40 hover:border-contrast-dark hover:scale-110 transition-transform cursor-pointer;
  }
</style>
