<script lang="ts">
  import Router from "svelte-spa-router";
  import HelloWorld from "./HelloWorld.svelte";
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

    "/album": Test,
    "/game": Test,
  };
</script>

<div id="app">
  <Router {routes} />
</div>
