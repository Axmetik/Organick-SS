import { NavLink } from "react-router-dom";
import Button from "../../components/Button/button";
import { useEffect } from "react";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <h2>404</h2>
          <h3>Page Not Found</h3>
          <p className="text">
            The page you are looking for doesn't exist or has been moved
          </p>
          <NavLink to={"/"}>
            <Button className="not-found" buttonText="Go to Homepage" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
