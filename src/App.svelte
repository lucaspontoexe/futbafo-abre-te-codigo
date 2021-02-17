<script lang="ts">
  import Register from "pages/Register.svelte";

  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import Album from "./pages/Album.svelte";
  import Game from "./pages/Game.svelte";
  import Login from "./pages/Login.svelte";
  import Profile from "./pages/Profile.svelte";
  import Tutorial from "./pages/Tutorial.svelte";
  import VoceSabia from "./pages/VoceSabia.svelte";

  const routes = {
    "/": Login,
    "/register": Register,
    "/profile": Profile,
    "/vocesabia": VoceSabia,
    "/tutorial": Tutorial,
    "/album": Album,
    "/game": Game,
  };
</script>

<style>
  #app {
    max-width: 720px;
    margin: 0px auto;
  }
  @media screen and (max-width: 720px) {
    #app {max-width: 100vw;}
  }
</style>

<div id="app">
  <NavBar />
  <Router {routes} />
</div>
