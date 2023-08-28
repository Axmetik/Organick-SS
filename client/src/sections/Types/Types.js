import banner1 from "../../assets/main/types/types1.jpg";
import banner2 from "../../assets/main/types/types2.jpg";
import banner3 from "../../assets/main/types/types3.jpg";
import "./Types.scss";

export default function Types() {
  return (
    <section className="types">
      <div className="types__container">
        <div className="types__content">
          <TypesItem img={banner1} text="Organic Juice" />
          <TypesItem img={banner2} text="Organic Food" />
          <TypesItem img={banner3} text="Nuts Cookies" />
        </div>
      </div>
    </section>
  );
}

function TypesItem({ img, text }) {
  return (
    <div className="types__item">
      <img src={img} alt={img} />
      <div className="types__text">{text}</div>
    </div>
  );
}
