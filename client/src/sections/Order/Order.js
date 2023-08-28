import { useState } from "react";
import Button from "../../components/Button/button";
import { useNavigate } from "react-router-dom";
import "./Order.scss";

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Місяці починаються з 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

export default function Order({ orderList, onDelete, handleOrder }) {
  const [toOrder, setToOrder] = useState(false);

  function handleInfoAboutOrder(object) {
    const date = new Date();
    const formattedDate = formatDate(date);
    handleOrder(object, total, formattedDate);
    setToOrder(false);
  }

  const total = orderList
    .map((item) => item.count * item.currentCost)
    .reduce((acc, curr) => acc + curr, 0);

  const discount =
    orderList
      .map((item) => item.count * (item.previousCost || item.currentCost))
      .reduce((acc, curr) => acc + curr, 0) - total;

  return (
    <section className="order">
      <div className="order__container">
        <div className="order__content">
          {orderList.length > 0 ? (
            orderList.map((item) => (
              <OrderItem item={item} key={item.id} onDelete={onDelete} />
            ))
          ) : (
            <p>Your Cart is empty</p>
          )}
        </div>
        {orderList.length > 0 ? (
          <>
            <div className="order__summary">
              <div className="order__cost">
                <span>Total Cost:</span>
                <p>${total}.00</p>
              </div>
              <div className="order__discount">
                <span>Discount:</span>
                <p>${discount}.00</p>
              </div>
            </div>
            {!toOrder && (
              <Button
                className="order"
                buttonText="To Order"
                onClick={() => setToOrder(!toOrder)}
              />
            )}
          </>
        ) : (
          ""
        )}
        {toOrder && <OrderForm handleInfo={handleInfoAboutOrder} />}
      </div>
    </section>
  );
}

const images = require.context("../../assets/main/our-products", true);
const imageList = images.keys().map((image) => images(image));

function OrderItem({ item, onDelete }) {
  const productName = imageList.filter(
    (photo) => `${photo.split("/").pop().split(".")[0]}.png` === item.image
  );

  return (
    <div className="order__item">
      <div
        className="order__image"
        style={{
          backgroundImage: `url('${productName[0]}')`,
        }}
      ></div>
      <div className="order__text">
        <h2 className="order__title">{item.name}</h2>
        {item.previousCost ? (
          <span className="order__previous">${item.previousCost}.00</span>
        ) : (
          ""
        )}
        <span className="order__current">${item.currentCost}.00</span>
      </div>
      <div className="order__quantity">
        <span>Quantity: </span>
        <input type="text" value={item.count} readOnly />
        <div className="order__cross" onClick={() => onDelete(item.id)}>
          X
        </div>
      </div>
    </div>
  );
}

function OrderForm({ handleInfo }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAdress, setCustomerAdress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const navigate = useNavigate();

  function handleCustomer(e, name, email, adress, phone, message) {
    e.preventDefault();
    handleInfo({ name, email, adress, phone, message });
    setCustomerName("");
    setCustomerEmail("");
    setCustomerAdress("");
    setCustomerPhone("");
    setCustomerMessage("");
    navigate("/thank-you");
  }

  return (
    <section className="order__form">
      <form
        onSubmit={(e) =>
          handleCustomer(
            e,
            customerName,
            customerEmail,
            customerAdress,
            customerPhone,
            customerMessage
          )
        }
      >
        <div className="order__full-name">
          <input
            type="text"
            placeholder="Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <label>Full Name*</label>
        </div>
        <div className="order__email">
          <input
            type="email"
            placeholder="Your Email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
          <label>Your Email*</label>
        </div>
        <div className="order__adress">
          <input
            type="text"
            placeholder="Your Adress"
            value={customerAdress}
            onChange={(e) => setCustomerAdress(e.target.value)}
            required
          />
          <label>Your Adress*</label>
        </div>
        <div className="order__phone">
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
          />
          <label>Phone Number*</label>
        </div>
        <div className="order__message">
          <textarea
            placeholder="Type Something...."
            value={customerMessage}
            onChange={(e) => setCustomerMessage(e.target.value)}
          />
          <label>Message</label>
        </div>
        <Button className="order" buttonText="Confirm" />
      </form>
    </section>
  );
}
