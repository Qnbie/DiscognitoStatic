<script lang="ts">
  import HeroSection from '$lib/components/hero-section.svelte';
  import ContactMe from '$lib/components/homepage/contact_me.svelte';
  import Introduction from '$lib/components/homepage/introduction.svelte';
  import RecentActivities from '$lib/components/homepage/recent_activities.svelte';

  const pkg = {
    cardTitle: 'CardTitle',
    cardSubtitle: 'CardSubtitle',
    cardDescription: 'CardDescrtiption',
    githubLink: 'github.com',
    blogLink: '/blog',
    tagList: ['Saab', 'Volvo', 'BMW']
  };
</script>

<HeroSection />
<Introduction />
<RecentActivities />
<ContactMe />
