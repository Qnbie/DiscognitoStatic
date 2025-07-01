<script lang="ts">
	import TagButton from './tag_button.svelte';

	let { cardTitle, cardSubtitle, cardDescription, tagList, blogLink, githubLink } = $props();

	function hasBlogPage() {
		return blogLink;
	}

	function hasGithubPage() {
		return githubLink;
	}

	function hasTags() {
		return tagList;
	}
</script>

<div class="max-w-4xl mx-auto">
	<div class="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
		<div class="corner-piece corner-topleft"></div>
		<div class="corner-piece corner-topright"></div>
		<div class="corner-piece corner-bottomleft"></div>
		<div class="corner-piece corner-bottomright"></div>

		<h2 class="text-3xl font-bold mb-2 text-white">{cardTitle}</h2>
		<h3 class="text-2xl font-semibold mb-6 text-transparent bg-clip-text gradient-horizontal">
			{cardSubtitle}
		</h3>
		<p class="text-lg text-gray-300 mb-8">{cardDescription}</p>
		{#if hasTags()}
			<ul class="flex flex-wrap gap-3 mb-8 text-gray-300">
				{#each tagList as tag}
					<TagButton buttonTitle={tag} />
				{/each}
			</ul>
		{/if}

		<div>
			{#if hasBlogPage()}
				<a
					href={blogLink}
					class="group inline-flex button-rounded gradient-horizontal hover:opacity-90 transition-opacity text-white"
					>Blog Post</a
				>
			{/if}
			{#if hasGithubPage()}
				<a
					href={githubLink}
					class="group inline-flex button-rounded border border-gray-700 hover:border-pink-500 transition-colors text-white"
					>Github</a
				>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.corner-piece {
		@apply absolute w-20 h-20 border-pink-500;
	}

	.corner-topleft {
		@apply top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl;
	}
	.corner-topright {
		@apply top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl;
	}
	.corner-bottomleft {
		@apply bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl;
	}
	.corner-bottomright {
		@apply bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl;
	}
</style>
