import Banners from "../../sections/Banners/Banners";
import ChooseTheWay from "../../sections/ChooseTheWay/ChooseTheWay";
import AboutUs from "../../sections/AboutUs/AboutUs";
import OurProducts from "../../sections/OurProducts/OurProducts";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Offer from "../../sections/Offer/Offer";
import EcoFriendly from "../../sections/EcoFriendly/EcoFriendly";
import Types from "../../sections/Types/Types";
import News from "../../sections/News/News";
import Subscribe from "../../sections/Subscribe/Subscribe";
import ModalWIndow from "../../components/ModalWindow/ModalWindow";
import { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.scss";

export default function MainPage({
  onAddToOrderList,
  modalVisibility,
  onModalVisibility,
}) {
  const [activeProduct, setActiveProduct] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getItems")
      .then((items) =>
        setList(items.data.sort((a, b) => b.previousCost - a.previousCost))
      )
      .catch((err) => console.log(err));
  }, []);

  const offerList = list.filter((item) => item.category === "Vegetable");

  function handleActiveProduct(item) {
    setActiveProduct(item);
    onModalVisibility();
  }

  return (
    <>
      <ChooseTheWay />
      <Banners />
      <AboutUs />
      <OurProducts list={list} onActiveProduct={handleActiveProduct} />
      <Testimonials />
      <Offer list={offerList} onActiveProduct={handleActiveProduct} />
      <EcoFriendly />
      <Types />
      <News />
      <Subscribe />
      {modalVisibility && (
        <ModalWIndow
          item={activeProduct}
          onModalVisibility={onModalVisibility}
          onAddToOrderList={onAddToOrderList}
        />
      )}
    </>
  );
}
