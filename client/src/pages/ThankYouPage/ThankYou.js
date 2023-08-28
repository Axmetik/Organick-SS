import { useEffect } from "react";
import thankBg from "../../assets/main/thank-you/thank-you-bg.png";
import "./ThankYou.scss";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="thank-you">
      <h2 id="thank">Thank you for your order</h2>
      <img src={thankBg} alt="thank" />
    </section>
  );
}
