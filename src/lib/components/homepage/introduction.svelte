<script lang="ts">
  import cat_taco from "$lib/assets/cat_taco.png";
</script>

<section class="home-page-section">
	<div class="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
		<div class="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0 flex flex-row">
      <div
				class="flex flex-col items-center justify-start gap-2 text-sm tracking-widest ml-[-50px] md:ml-[-10px] lg:ml-0"
			>
				<p class="rotate-[-90deg] mb-4 mt-5">Qnbie</p>
				<div class="h-full border-l-white border-solid border-1"></div>
			</div>

			<div class="flex flex-col">
				<h2 class="title-size">Hi there, I am</h2>
				<h2 class="title-size gradient-text">Bendeguz Kun</h2>
				<p class="p-3 text-gray-400 text-sm leading-relaxed">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor officia at culpa,
					adipisci ipsum quia asperiores voluptas hic neque earum facilis corrupti sed quibusdam
					facere, veritatis id accusantium velit.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor officia at culpa,
					adipisci ipsum quia asperiores voluptas hic neque earum facilis corrupti sed quibusdam
					facere, veritatis id accusantium velit.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolor officia at culpa,
					adipisci ipsum quia asperiores voluptas hic neque earum facilis corrupti sed quibusdam
					facere, veritatis id accusantium velit.
				</p>
			</div>
		</div>
    <div class="w-full md:w-1/2 flex justify-center items-center">
      <img src={cat_taco} alt="Me in my coolest form">
    </div>
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	.title-size {
		@apply xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold leading-tight;
	}
</style>
