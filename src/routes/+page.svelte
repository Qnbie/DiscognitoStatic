<script lang="ts">
	import Introduction from "$lib/components/homepage/introduction.svelte";
  import FavouriteProjects from "$lib/components/homepage/favourite_projects.svelte";
  import LatestBlogPosts from "$lib/components/homepage/latest_blog_posts.svelte";

const pkg = {
  cardTitle: "CardTitle",
  cardSubtitle: "CardSubtitle",
  cardDescription: "CardDescrtiption",
  githubLink: "github.com",
  blogLink: "/blog",
  tagList: ["Saab", "Volvo", "BMW"]
}
</script>

<Introduction />

<FavouriteProjects />

<LatestBlogPosts />

<h2>Contact Me</h2>
