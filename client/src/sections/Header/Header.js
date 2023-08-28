import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import searchImg from "../../assets/header/search.svg";
import CartImg from "../../assets/header/cart.svg";
import "./Header.scss";

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Pages",
    link: "/pages",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "News",
    link: "/news",
  },
];

export default function Header({ numItems }) {
  const { windowWidth, windowHeight } = useWindowSize();
  //console.log(windowWidth);
  //console.log(windowHeight);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Logo windowWidth={windowWidth} className="header" />
          {windowWidth > 1210 && <Navbar />}
          {windowWidth > 520 && <Search />}
          <Cart windowWidth={windowWidth} numItems={numItems} />
          {windowWidth < 1210 && <BurgerMenu />}
        </div>
      </div>
    </header>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      {menuItems.map((item) => (
        <NavLink to={item.link} key={item.title}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

function Search() {
  return (
    <div className="header__search">
      <div className="header__form">
        <form className="header__form-content">
          <input type="text" />
          <div className="header__button">
            <img src={searchImg} alt="search" />
          </div>
        </form>
      </div>
    </div>
  );
}

function Cart({ windowWidth, numItems }) {
  return (
    <NavLink to={"/cart"} key="cart">
      <div className="header__cart">
        <div className="smth">
          <div className="header__cart-image">
            <img src={CartImg} alt="search" />
          </div>
          {(windowWidth > 700 || (windowWidth < 512 && windowWidth > 450)) && (
            <span>Cart ({numItems})</span>
          )}
        </div>
      </div>
    </NavLink>
  );
}

function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const body = document.querySelector("body");

  isActive ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");

  return (
    <div className="burger">
      <span className="burger__icon" onClick={() => setIsActive(!isActive)}>
        {isActive ? "X" : "☰"}
      </span>
      <div className={isActive ? "burger__menu active" : "burger__menu"}>
        <ul className="burger__list">
          {menuItems.map((item) => (
            <NavLink to={item.link} key={item.title}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
