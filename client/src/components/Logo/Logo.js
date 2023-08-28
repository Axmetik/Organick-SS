import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/header/logo.svg";
import "./Logo.scss";

export default function Logo({ windowWidth, className }) {
  return (
    <NavLink to={"/"} key="logo">
      <div className="logo">
        <img src={LogoImg} alt="logo" />
        {(windowWidth > 969 || className !== "header") && (
          <span className="logo__text">Organick</span>
        )}
      </div>
    </NavLink>
  );
}
