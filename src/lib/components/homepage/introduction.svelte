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
        <div class="h-full border-pink-500 border-solid border-1"></div>
      </div>

      <div class="flex flex-col">
        <h2 class="title-size">Hi there, I am</h2>
        <h2 class="title-size gradient-text">Bendeguz Kun</h2>
        <p class="p-3 text-gray-400 text-sm leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor officia at culpa,
          adipisci ipsum quia asperiores voluptas hic neque earum facilis corrupti sed quibusdam
          facere, veritatis id accusantium velit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Placeat dolor officia at culpa, adipisci ipsum quia asperiores voluptas
          hic neque earum facilis corrupti sed quibusdam facere, veritatis id accusantium velit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor officia at culpa,
          adipisci ipsum quia asperiores voluptas hic neque earum facilis corrupti sed quibusdam
          facere, veritatis id accusantium velit.
        </p>
      </div>
    </div>
    <div class="w-full md:w-1/2 h-150 justify-end flex flex-none">
      <img
        src={profpic}
        alt="Me in my coolest form"
        class="h-full border-b-pink-500 border-r-pink-500 border-b-2 border-r-2 rounded-br-2xl"
      />
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";
</style>
