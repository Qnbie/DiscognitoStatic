<script>
	import eva_mach from '$lib/assets/eva_mech.png';
  import galaxy_bg from "$lib/assets/galaxy_bg.jpg";
	import { animateTyping } from '$lib/scripts/animate_typing';

  let nick_names = ["independent variable", "game master", "dev guru", "aestetic corner stone", "git wizard", "cto of ms studio"]
</script>

<section class="xl:h-screen w-full relative h-screen" style="background-image: url({galaxy_bg})">
	<div class="flex flex-col justify-center items-center h-screen">
		<h1 class="xl:text-8xl lm:text-7xl md:text-6xl sm:text-5xl text-4xl m-3 flex-none top-0 text-pink-500 bg-indigo-300/70">Qnbie the</h1>
		<span class="xl:text-4xl lm:text-3xl md:text-2xl sm:text-1xl text-xl text-pink-500 bg-indigo-300/70" use:animateTyping={nick_names}></span>
	</div>
	<div class="bottom-0 left-0 w-1/2 xl:w-1/3 absolute">
		<img src={eva_mach} alt="Eva mach from NeonGenesisEvangelion" />
	</div>
</section>
