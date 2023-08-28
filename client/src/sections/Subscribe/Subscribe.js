import Button from "../../components/Button/button";
import "./Subscribe.scss";

export default function Subscribe() {
  function Submit(event) {
    event.preventDefault();
    console.log("good");
  }

  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <div className="subscribe__content">
          <h3 className="subscribe__text">Subscribe to our Newsletter</h3>
          <form className="subscribe__form" onSubmit={Submit}>
            <input type="email" placeholder="Your email adress" />
            <Button className="subscribe" buttonText="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
}
