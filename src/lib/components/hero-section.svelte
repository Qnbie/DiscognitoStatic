<script>
	import eva_mach from '$lib/assets/eva_mech.png';
  import galaxy_bg from "$lib/assets/galaxy_bg.jpg";
	import { animateTyping } from '$lib/scripts/animate_typing';

  let nick_names = ["independent variable", "game master", "dev guru", "aestetic corner stone", "git wizard", "cto of ms studio"]
</script>

<section class="xl:h-screen w-full relative h-[1650px]">
  <div class="absolute h-screen w-screen -z-50">
    <img src={galaxy_bg} alt="" class="w-screen">
  </div>
	<div class="flex flex-col justify-center items-center h-full">
		<h1 class="text-8xl m-3 flex-none top-0 text-pink-500 bg-indigo-300">Qnbie the</h1>
		<span class="text-4xl text-pink-500 bg-indigo-300" use:animateTyping={nick_names}></span>
	</div>
	<div class="bottom-0 left-0 w-1/2 xl:w-1/3 absolute">
		<img src={eva_mach} alt="Eva mach from NeonGenesisEvangelion" />
	</div>
</section>
