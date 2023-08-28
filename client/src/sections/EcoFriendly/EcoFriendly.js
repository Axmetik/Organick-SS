import TextBlock from "../../components/TextBlock/TextBlock";
import useWindowSize from "../../hooks/useWindowSize";
import ecoImage from "../../assets/main/eco-friendly/eco-friendly-image.png";
import "./EcoFriendly.scss";

export default function EcoFriendly() {
  const { windowWidth, windowHeight } = useWindowSize(null);

  return (
    <section className="eco-friendly">
      <div className="eco-friendly__container">
        <div className="eco-friendly__content">
          {windowWidth > 1300 && (
            <div className="eco-friendly__column">
              <img src={ecoImage} alt="eco-friendly" />
            </div>
          )}
          <div className="eco-friendly__column">
            <div className="eco-friendly__page">
              <TextBlock
                className="eco-friendly"
                subtitleText="Eco Friendly"
                titleText="Econis is a Friendly
              Organic Store"
              />
              <div className="eco-friendly__items">
                <EcoItem
                  title="Start with Our Company First"
                  text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
                />
                <EcoItem
                  title="Learn How to Grow Yourself"
                  text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
                />
                <EcoItem
                  title="Farming Strategies of Today"
                  text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoItem({ title, text }) {
  return (
    <div className="eco-friendly__item">
      <div className="item-text-block">
        <h2 className="item-title">{title}</h2>
        <span className="item-text">{text}</span>
      </div>
    </div>
  );
}
