import Button from "../../components/Button/button";
import TextBlock from "../../components/TextBlock/TextBlock";
import "./ChooseTheWay.scss";

export default function ChooseTheWay() {
  return (
    <section className="choose-the-way">
      <div className="choose-the-way__container">
        <div className="choose-the-way__content">
          <TextBlock
            className={"choose-the-way"}
            subtitleText={"100% Natural"}
            titleText={`Choose the best healthier way of life`}
          />
          <Button
            className="choose-the-way"
            link="/"
            buttonText="Exprlore Now"
          />
        </div>
      </div>
    </section>
  );
}
