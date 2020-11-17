<script lang="ts">
  import Router from "svelte-spa-router";
  import NavBar from "./components/NavBar.svelte";
  import Album from "./pages/Album.svelte";
  import Game from "./pages/Game.svelte";
  import Login from "./pages/Login.svelte";
  import Profile from "./pages/Profile.svelte";
  import Test from "./pages/Test.svelte";
  import Tutorial from "./pages/Tutorial.svelte";
  import VoceSabia from "./pages/VoceSabia.svelte";

  const routes = {
    "/": Login,
    "/profile": Profile,
    "/vocesabia": VoceSabia,
    "/tutorial": Tutorial,
    "/album": Album,
    "/game": Game,
  };
</script>

<div id="app">
  <NavBar />
  <Router {routes} />
</div>
