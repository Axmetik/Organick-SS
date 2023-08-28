import axios from "axios";
import { useEffect, useState } from "react";
import "./AdminPage.scss";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getOrders")
      .then((arr) => setOrders(arr.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="admin">
      <div className="admin__container">
        <div className="admin__content">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Product list</th>
                <th>Total $</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={orders.indexOf(item)}>
                  <td>{item.customer.name}</td>
                  <td>{item.customer.email}</td>
                  <td>
                    {Object.values(item.products).map(
                      (product) => `${product.name}(${product.count}), `
                    )}
                  </td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
