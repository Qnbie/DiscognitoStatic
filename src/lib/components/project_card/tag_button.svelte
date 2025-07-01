<script lang="ts">
  let { buttonTitle } = $props();
</script>

<div
	class="button-rounded-small gradient-vertical interactive border border-gray-700 "
>
  {buttonTitle}
</div>

<style lang="postcss">
  @reference "tailwindcss";

  .interactive{
    @apply hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer;
    
  }
</style>
