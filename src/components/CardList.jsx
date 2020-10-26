// import dataset from "../dataset.json";
import sampleCard from "images/48julianacabral.jpg";
import check from "images/icons/sinal_check.png";

import "./CardList.scss";

export default function CardList(params) {
  return (
    <section className="card-list">
      <div className="card-wrapper"></div>

      <div className="card-wrapper">
        <div className="check">
          <img src={check} alt="" />
        </div>
      </div>

      <div className="card-wrapper"></div>

      <div className="card-wrapper">
        <div className="check">
          <img src={check} alt="" />
        </div>
      </div>
    </section>
  );
}
