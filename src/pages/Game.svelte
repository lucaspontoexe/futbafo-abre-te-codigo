<script lang="ts">

  const foto = "images/cards/green.png";
  const bluecard = "/images/cards/blue.png";
  const maxDistance = 90;


function processCardStyle(flipped: boolean, isCardTaken: boolean) {
  const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
  const randomrotation = () => (Math.random() - 0.5) * 360;

  return `
    position: absolute;
    left: ${window.innerWidth / 2 - 130 / 2 + (Math.random() - 0.5) * 20}px;
    top: ${window.innerHeight / 2 - 120 / 2 + (Math.random() - 0.5) * 20}px;
    width: 130px;
    height: 120px;
    background-image: ${isCardTaken ? `url(${foto})` : `url(${bluecard})`};
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    transition: all 1s cubic-bezier(.15,.84,.84,1);
    transform: ${flipped ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg);`: ""}
  `;
}  
</script>

<style lang="scss">
  .game-wrapper {
    color: #60358f;
    position: relative;
    text-align: center;

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 57px;
      margin: 0.4em auto;
    }
  }
</style>

<div class="game-wrapper">
  <h1>Comece a jogar!</h1>
  <p>Bata no monte e tente virar as figurinhas</p>
  <div class="game">
    <div style={processCardStyle(true , true)} />
    <div style={processCardStyle(false, false)} />
    <div style={processCardStyle(false, false)} />
    <div style={processCardStyle(false, false)} />
  </div>

  <button> Jogar </button>


</div>
