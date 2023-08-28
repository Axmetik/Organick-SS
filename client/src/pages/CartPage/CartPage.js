import CartBanner from "../../sections/CartBanner/CartBanner";
import Order from "../../sections/Order/Order";
import "./CartPage.scss";

export default function CartPage({ orderList, onDelete, handleOrder }) {
  return (
    <>
      <CartBanner />
      <Order
        orderList={orderList}
        onDelete={onDelete}
        handleOrder={handleOrder}
      />
    </>
  );
}
