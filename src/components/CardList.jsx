// import dataset from "../dataset.json";
import sampleCard from "images/rectangle9.svg";
import check from "images/icons/sinal_check.png";

import "./CardList.scss";

export default function CardList(params) {
  return (
    <section className="card-list">
      <div className="card-wrapper">
        <img src={sampleCard} alt="Carta" />
      </div>

      <div className="card-wrapper selected">
        <img src={sampleCard} alt="Carta" />
        <div className="check">
          <img src={check} alt=""/>
        </div>
      </div>

      <div className="card-wrapper">
        <img src={sampleCard} alt="Carta" />
      </div>


      <div className="card-wrapper">
        <img src={sampleCard} alt="Carta" />
      </div>


    
    </section>
  );
}
