import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/button";
import { NavLink } from "react-router-dom";
import icon1 from "../../assets/main/about-us/icon-1.svg";
import icon2 from "../../assets/main/about-us/icon-2.svg";
import aboutImage from "../../assets/main/about-us/about-us-image.png";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__column">
            <img src={aboutImage} className="about-us__image" alt="about-us" />
          </div>
          <div className="about-us__column">
            <TextBlock
              className="about-us"
              titleText="We Believe in Working Accredited Farmers"
              subtitleText="About Us"
            />
            <p className="about-us__paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="about-us__items">
              <AboutItem
                icon={icon1}
                title="Organic Foods Only"
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
              <AboutItem
                icon={icon2}
                title="Quality Standards"
                text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
            </div>
            <NavLink to={"/about-us"}>
              <Button className="about-us" buttonText="Shop Now" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutItem({ icon, title, text }) {
  return (
    <div className="about-us__item">
      <div className="item-image">
        <img src={icon} alt="img" />
      </div>
      <div className="item-text-block">
        <h2 className="item-title">{title}</h2>
        <span className="item-text">{text}</span>
      </div>
    </div>
  );
}
