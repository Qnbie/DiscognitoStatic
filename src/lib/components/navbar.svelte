<!-- component -->
<nav class="w-1/2 mx-auto my-4 bg-cyan-400 px-8 pt-2 shadow-md rounded-md">
  <div class="-mb-px flex justify-center">
    <a class="menu-item interactive" href="/"> Home </a>
    <a class="menu-item interactive" href="/aboutme"> AboutMe </a>
    <a class="menu-item interactive" href="/portfolio"> Portfolio </a>
    <a class="menu-item interactive" href="/blog"> Blog </a>
  </div>
</nav>

<style lang="postcss">
  @reference "tailwindcss";

  .menu-item {
    @apply no-underline text-black border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8;
  }

  .interactive {
    @apply hover:text-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-amber-300;
  }
</style>
