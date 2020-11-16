<script lang="ts">
  import { onMount } from "svelte";
  import { selectedCards } from "../store";

  const foto = "images/cards/green.png";
  const bluecard = "/images/cards/blue.png";
  const maxDistance = 90;

  let doFlip = false;

  function processCardStyle(flipped: boolean, isCardTaken: boolean) {
    const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
    const randomrotation = () => (Math.random() - 0.5) * 360;

    return `
    position: absolute;
    left: calc(50% - ${130 / 2 + (Math.random() - 0.5) * 20}px);
    top: calc(50% - ${120 / 2 + (Math.random() - 0.5) * 20}px);
    width: 130px;
    height: 120px;
    background-image: ${isCardTaken ? `url(${foto})` : `url(${bluecard})`};
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    transition: all 1s cubic-bezier(.15,.84,.84,1);
    transform: ${
      flipped
        ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg);`
        : ""
    }
    z-index: ${isCardTaken ? 1 : 0};
  `;
  }

  function flipCards() {
    navigator.vibrate(50);
    doFlip = true;
  }

  onMount(() => {
    console.log($selectedCards);
  });
</script>

<style lang="scss">
  .game-wrapper {
    color: #60358f;
    position: relative;
    text-align: center;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 57px;
      margin: 0.4em auto;
    }
  }

  .game {
    width: 100%;
    height: 50vh;
  }
</style>

<div class="game-wrapper">
  <h1>Comece a jogar!</h1>
  <p>Bata no monte e tente virar as figurinhas</p>
  <div class="game">
    <div class="card" style={processCardStyle(doFlip, true)} />
    <div class="card" style={processCardStyle(doFlip, false)} />
    <div class="card" style={processCardStyle(doFlip, false)} />
    <div class="card" style={processCardStyle(doFlip, false)} />
  </div>

  <button on:click={flipCards}> Jogar </button>
</div>
