<script lang="ts">
  import HeroSection from '$lib/components/hero-section.svelte';
  import ContactMe from '$lib/components/homepage/contact_me.svelte';
  import Introduction from '$lib/components/homepage/introduction.svelte';
  import RecentActivities from '$lib/components/homepage/recent_activities.svelte';

  import type { Post } from '$lib/types';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<HeroSection />
<Introduction />
<RecentActivities posts={data.posts} />
<ContactMe />

