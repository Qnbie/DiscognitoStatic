<script lang="ts">
import ProjectCard from "$lib/components/project_card/project_card.svelte";

const pkg = {
  cardTitle: "CardTitle",
  cardSubtitle: "CardSubtitle",
  cardDescription: "CardDescrtiption",
  githubLink: "github.com",
  blogLink: "/blog",
  tagList: ["Saab", "Volvo", "BMW"]
}
</script>

<ProjectCard {...pkg}/>


