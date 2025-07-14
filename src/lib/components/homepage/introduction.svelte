<script lang="ts">
  import profpic from '$lib/assets/profpic.png';
</script>

<section class="home-page-section justify-center">
  <div
    class="flex container flex-col md:flex-row items-center gap-16 w-full xl:h-screen h-[1000px]"
  >
    <div class="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0 flex flex-row flex-1/2">
      <div
        class="flex flex-col items-center justify-start gap-2 text-sm tracking-widest ml-[-50px] md:ml-[-10px] lg:ml-0"
      >
        <p class="rotate-[-90deg] mb-4 mt-5">Qnbie</p>
        <div class="h-full border-accent-dark border-solid border-1"></div>
      </div>

      <div class="flex flex-col">
        <h2>Hi there, I am</h2>
        <h2 class="gradient-text">Bendeguz Kun</h2>
        <p class="p-3 leading-relaxed">
          I'm a somewhat full-stack software developer. My preferences are mostly on the back end of
          things, but as this website can prove, I'm not afraid of the frontend either. Besides
          these, I'm a Linux enthusiast (Windows-free from 2023), aspiring game developer, hobbyist
          game engine noob, and in the past, I earned the security subject matter expert title for
          some reason.
        </p>
        <p class="p-3 leading-relaxed">
          This website is meant to be a showcase for my small projects and my thoughts on IT-related
          topics. These projects are mainly for learning how to use new technologies, understanding
          how old technologies work, and experimenting with various things. My philosophy in life is
          to learn constantly and not be afraid to lose. This is what I wanted to showcase with my
          portfolio site, <span class="gradient-text">Discognito</span>.
        </p>
      </div>
    </div>
    <div class="w-full md:w-1/2 h-150 justify-end flex flex-none">
      <img
        src={profpic}
        alt="Me in my coolest form"
        class="h-full border-b-accent-dark border-r-accent-dark border-b-2 border-r-2 rounded-br-2xl flex-none"
      />
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";
</style>
