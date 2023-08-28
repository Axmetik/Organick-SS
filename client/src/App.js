import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import ThankYou from "./pages/ThankYouPage/ThankYou";
import Admin from "./pages/AdminPage/AdminPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [orderList, setOrderList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getOrderList")
      .then((arr) => setOrderList(arr.data))
      .catch((err) => console.log(err));
  }, []);

  if (modalVisibility) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  function handleDeleteFromOrderList(id) {
    console.log("handling");
    let newList = orderList.filter((item) => item.id !== id);
    let objectToDelete = orderList.find((item) => item.id === id);
    try {
      axios.post("http://localhost:5000/deleteItem", objectToDelete);
    } catch (error) {
      throw error;
    }
    console.log("axios");
    setOrderList(newList);
  }

  function handleAddToOrderList(e, object) {
    e.preventDefault();

    const objectWithId = orderList.find((item) => item.id === object.id);

    if (objectWithId) {
      let newArr = orderList.filter((item) => item.id !== object.id);
      let newObj = {
        ...objectWithId,
        count: Number(object.count) + Number(objectWithId.count),
      };
      try {
        axios.post("http://localhost:5000/addCart", newObj);
      } catch (error) {
        console.log(error);
      }
      setOrderList([...newArr, newObj]);
    } else {
      try {
        axios.post("http://localhost:5000/addCart", object);
      } catch (error) {
        console.log(error);
      }
      setOrderList([...orderList, object]);
    }
    handleModalVisibility();
  }

  function handleModalVisibility() {
    setModalVisibility(!modalVisibility);
  }

  function handleOrder(object, total, date) {
    let order = {
      products: { ...orderList },
      customer: { ...object },
      totalValue: total,
      date: date,
    };
    //console.log(order);
    try {
      axios.post("http://localhost:5000/saveOrder", order);
      //axios.delete("http://localhost:5000/clearCart");
    } catch (error) {
      throw error;
    }
    setOrderList([]);
  }

  return (
    <Layout numItems={orderList.length}>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              onAddToOrderList={handleAddToOrderList}
              modalVisibility={modalVisibility}
              onModalVisibility={handleModalVisibility}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              orderList={orderList}
              onDelete={handleDeleteFromOrderList}
              handleOrder={handleOrder}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Layout>
  );
}
