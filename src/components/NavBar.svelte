<script lang="ts">
  import { location, link } from "svelte-spa-router";
  const profile = "";
  const howtoplay = "";
  const game = "";
  const album = "";

  const links = [
    { location: "/profile", name: "Perfil", image: profile },
    { location: "/tutorial", name: "Como Jogar?", image: howtoplay },
    { location: "/game", name: "Bafo!", image: game, alt: "Cartas" },
    {
      location: "/album",
      name: "Álbum",
      image: album,
      alt: "Álbum de Figurinhas",
    },
  ];
</script>

<style lang="scss">
  nav.main-nav {
    a {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      text-decoration: inherit;
      color: inherit;
    }

    ul {
      display: flex;
      flex-direction: row;
      background: #f4f9e7;
      list-style-type: none;
      margin: 0;
      padding: 0px;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      padding: 4px 0px;

      img {
        height: 30px;
        object-fit: contain;
      }

      span {
        font-size: 0.8em;
      }

      &.active {
        background: #a3c54b;
        color: white;
        font-weight: bold;
      }
    }
  }
</style>

<nav class="main-nav">
  <ul>
    {#each links as url}
      <li class={$location === url.location ? 'active' : ''}>
        <a href={url.location} use:link>
          <img src={url.image} alt={url.alt || url.name} />
          <span>{url.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
