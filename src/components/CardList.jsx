// import dataset from "../dataset.json";
import sampleCard from "images/rectangle9.svg";

export default function CardList(params) {
  return (
    <section>
      <div className="card-wrapper">
        <img src={sampleCard} alt="Carta" />
      </div>

      <div className="card-wrapper selected">
        <img src={sampleCard} alt="Carta" />
      </div>
    </section>
  );
}
