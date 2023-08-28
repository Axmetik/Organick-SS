import { useState } from "react";
import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/button";
import Product from "../../components/Product/Product";
import "./OurProducts.scss";

export default function OurProducts({ list, onActiveProduct }) {
  const [show, setShow] = useState(false);
  return (
    <section className="our-products">
      <div className="our-products__container">
        <TextBlock
          className="our-products"
          titleText="Our Products"
          subtitleText="Categories"
        />
        <div className="our-products__content">
          {show
            ? list.map((item) => (
                <Product
                  item={item}
                  key={list.indexOf(item)}
                  onActiveProduct={onActiveProduct}
                />
              ))
            : list
                .filter((item) => item.previousCost)
                .filter((item) => list.indexOf(item) < 8)
                .map((item) => (
                  <Product
                    item={item}
                    key={list.indexOf(item)}
                    onActiveProduct={onActiveProduct}
                  />
                ))}
        </div>
        <Button
          buttonText={show ? "Hide All" : "Load More"}
          className="our-products"
          onClick={() => setShow(!show)}
        />
      </div>
    </section>
  );
}
