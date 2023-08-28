import { useState } from "react";
import Button from "../Button/button";
import stars from "../../assets/main/testimonials/stars.png";
import "./ModalWindow.scss";

const images = require.context("../../assets/main/our-products", true);
const imageList = images.keys().map((image) => images(image));

export default function ModalWIndow({
  item,
  onModalVisibility,
  onAddToOrderList,
}) {
  const productName = imageList.filter(
    (photo) => `${photo.split("/").pop().split(".")[0]}.png` === item.image
  );

  const [descActive, setDescActive] = useState(true);
  const [count, setCount] = useState(1);

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__image">
            <img src={`${productName}`} alt="cabachok" />
            <span className="modal__category">{item.category}</span>
          </div>
          <ModalProduct item={item}>
            <form className="modal__form">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <Button
                className="modal"
                buttonText="Add To Cart"
                onClick={(e) => onAddToOrderList(e, { ...item, count })}
              />
            </form>
          </ModalProduct>
        </div>
        <div className="modal__additional">
          <div className="modal__buttons">
            <button
              className={`modal__button-desc ${descActive ? "active" : ""}`}
              onClick={() => setDescActive(!descActive)}
            >
              Product Description
            </button>
            <button
              className={`modal__button-info ${!descActive ? "active" : ""}`}
              onClick={() => setDescActive(!descActive)}
            >
              Additional Info
            </button>
          </div>
          <p className="modal__text">
            {descActive ? item.description : item.additional}
          </p>
        </div>
        <div className="modal__cross" onClick={onModalVisibility}>
          X
        </div>
      </div>
      <div className="modal__empty" onClick={onModalVisibility}></div>
    </div>
  );
}

function ModalProduct({ item, children }) {
  return (
    <div className="modal__product">
      <h2 className="modal__name">{item.name}</h2>
      <div className="modal__values">
        <img src={stars} alt="stars" />
        {item.previousCost ? (
          <span className="our-products__previous">
            ${item.previousCost}.00
          </span>
        ) : (
          ""
        )}
        <span className="our-products__current">${item.currentCost}.00</span>
      </div>
      <p className="modal__description">{item.text}</p>
      {children}
    </div>
  );
}
