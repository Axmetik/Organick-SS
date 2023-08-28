import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "../../components/Logo/Logo";
import inst from "../../assets/footer/instagram.svg";
import fb from "../../assets/footer/facebook.svg";
import twi from "../../assets/footer/twitter.svg";
import pint from "../../assets/footer/pinterest.svg";
import "./Footer.scss";

export default function Footer() {
  const { windowWidth, windowHeight } = useWindowSize();
  //console.log(windowWidth);
  //console.log(windowHeight);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column">
            <h3 className="footer__header">Contact Us</h3>
            <ul className="footer__list">
              <li>
                <FooterItem title="Email">
                  <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
                </FooterItem>
              </li>
              <li>
                <FooterItem title="Phone">
                  <a href="tel:666888888">666888888</a>
                </FooterItem>
              </li>
              <li>
                <FooterItem title="Adress">
                  88 road, borklyn street, USA
                </FooterItem>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <Logo windowWidth={windowWidth} />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={inst} alt="instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="instagram" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twi} alt="instagram" />
              </a>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pint} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="footer__column">
            <h3 className="footer__header">Utility Pages</h3>
            <ul className="footer__list">
              <li>
                <FooterItem>
                  <NavLink to="/404">Style Guide</NavLink>
                </FooterItem>
              </li>
              <li>
                <FooterItem>
                  <NavLink to="/404">404 Not Found</NavLink>
                </FooterItem>
              </li>
              <li>
                <FooterItem>
                  <NavLink to="/404">Password-protected</NavLink>
                </FooterItem>
              </li>
              <li>
                <FooterItem>
                  <NavLink to="/404">Licences</NavLink>
                </FooterItem>
              </li>
              <li>
                <FooterItem>
                  <NavLink to="/404">Changelog</NavLink>
                </FooterItem>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span>{" "}
        Templates - Powered by
        <span> Webflow</span>
      </p>
    </footer>
  );
}

function FooterItem({ title, children }) {
  return (
    <div className="footer__item">
      {title && <p className="footer__title">{title}</p>}
      <span className="footer__text">{children}</span>
    </div>
  );
}
