<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer />
