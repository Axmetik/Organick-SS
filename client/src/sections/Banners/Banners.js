import TextBlock from "../../components/TextBlock/TextBlock";
import offerBanner1 from "../../assets/main/banners/banner1.png";
import offerBanner2 from "../../assets/main/banners/banner2.png";
import "./Banners.scss";

export default function Banners() {
  return (
    <section className="banners">
      <div className="banners__container">
        <div className="banners__content">
          <Banner
            image={offerBanner1}
            className={"banners"}
            titleText={"Get Garden Fresh Fruits"}
            subtitleText={"Natural!!"}
          />
          <Banner
            image={offerBanner2}
            className={"banners"}
            titleText={"Get 10% off on vegetables"}
            subtitleText={"Offer!!"}
          />
        </div>
      </div>
    </section>
  );
}

function Banner({ image, className, titleText, subtitleText }) {
  return (
    <div className="banners__banner">
      <img src={image} alt="banner" />
      <TextBlock
        className={className}
        titleText={titleText}
        subtitleText={subtitleText}
      />
    </div>
  );
}
