<script>
  import VoceSabia from "../pages/VoceSabia.svelte";
import AlbumPage from "../components/AlbumPage.svelte";

//   window.innerWidth
//   $0.scrollWidth // album scroll width
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
  <AlbumPage title="As Donas da Bola" color="green"/>
  <AlbumPage title="A Seleção!" color="yellow"/>
  <VoceSabia/>
  <AlbumPage title="Elas e seus Clubes" color="red"/>
  <AlbumPage title="Objetos e Memórias" color="blue"/>
  <VoceSabia/>
</section>
