import stars from "../../assets/main/testimonials/stars.png";
import "../../sections/OurProducts/OurProducts.scss";

const images = require.context("../../assets/main/our-products", true);
const imageList = images.keys().map((image) => images(image));

export default function Product({ item, onActiveProduct }) {
  const productName = imageList.filter(
    (photo) => `${photo.split("/").pop().split(".")[0]}.png` === item.image
  );

  return (
    <div
      className="our-products__item"
      style={{
        backgroundImage: `url('${productName[0]}')`,
      }}
      onClick={() => onActiveProduct(item)}
    >
      <span className="our-products__category">{item.category}</span>
      <div className="our-products__description">
        <span className="our-products__name">{item.name}</span>
        <div className="our-products__values">
          {item.previousCost ? (
            <span className="our-products__previous">
              ${item.previousCost}.00
            </span>
          ) : (
            ""
          )}
          <span className="our-products__current">${item.currentCost}.00</span>
          <img src={stars} alt="stars" />
        </div>
      </div>
    </div>
  );
}
