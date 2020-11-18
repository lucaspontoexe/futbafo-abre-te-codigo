<script>
  import AlbumPage from "../components/AlbumPage.svelte";
</script>

<style>
  section#album {
    display: flex;
    flex-flow: row nowrap;

    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    position: relative;
  }
</style>

<section id="album">
  <AlbumPage />
  <AlbumPage />
  <AlbumPage />
</section>
