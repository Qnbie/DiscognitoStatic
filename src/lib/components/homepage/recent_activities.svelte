<script lang="ts">
  import ProjectCard from '../project_card/project_card.svelte';

  let pkg = {
    cardTitle: 'Project Title',
    cardSubtitle: 'SubTitle',
    cardDescription: 'loremipsum',
    tagList: ['py', 'cpp'],
    blogLink: 'asd',
    githubLink: 'asd'
  };
</script>

<section class="home-page-section">
  <div class="w-full flex flex-col justify-center items-center xl:h-screen h-[1000px]">
    <h2 class="title-size">Recent Activities</h2>
    <div class="flex">
      <ProjectCard {...pkg} />
      <ProjectCard {...pkg} />
      <ProjectCard {...pkg} />
    </div>
  </div>
</section>
