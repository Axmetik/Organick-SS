import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TextBlock from "../../components/TextBlock/TextBlock";
import customerImg from "../../assets/main/testimonials/customer.svg";
import stars from "../../assets/main/testimonials/stars.png";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__content">
          <TextBlock
            className="testimonials"
            titleText="What Our Customers Saying"
            subtitleText="Testimonials"
          />
          <div className="testimonials__swiper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              //   onSlideChange={() => console.log("slide change")}
              //   onSwiper={(swiper) => console.log(swiper)}
              loop={true}
            >
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
            </Swiper>
          </div>
          <Circles />
        </div>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="testimonials__slide">
      <img className="testimonials__photo" src={customerImg} alt="customer" />
      <img className="testimonials__stars" src={stars} alt="stars" />
      <p className="testimonials__text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </p>
      <div className="testimonials__person">
        <h3 className="testimonials__name">Sara Taylor</h3>
        <span className="testimonials__position">Consumer</span>
      </div>
    </div>
  );
}

function Circles() {
  return (
    <div className="testimonials__circles">
      <Circle statsNum="100%" statsText="Organic" />
      <Circle statsNum="285" statsText="Active Product" />
      <Circle statsNum="350+" statsText="Organic Orchads" />
      <Circle statsNum="25+" statsText="Years of Farming" />
    </div>
  );
}

function Circle({ statsNum, statsText }) {
  return (
    <div className="testimonials__circle">
      <div className="testimonials__stats">
        <h3>{statsNum}</h3>
        <span>{statsText}</span>
      </div>
    </div>
  );
}
