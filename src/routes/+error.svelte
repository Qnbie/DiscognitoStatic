<script>
  import { page } from '$app/stores';
</script>

<section class="h-screen justify-center">
  <h1>{$page.status}: {$page.error?.message}</h1>
</section>

