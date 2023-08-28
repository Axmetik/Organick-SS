import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/button";
import news1 from "../../assets/main/news/news1.png";
import news2 from "../../assets/main/news/news2.png";
import "./News.scss";

export default function News() {
  return (
    <section className="news">
      <div className="news__container">
        <div className="news__heading">
          <TextBlock
            className="news"
            subtitleText="News"
            titleText="Discover weekly content about organic food, & more"
          />
          <Button className="news" buttonText="More News" />
        </div>
        <div className="news__content">
          <div className="news__board">
            <NewsBlock
              img={news1}
              date="25 Nov"
              author="Rachi Card"
              title="The Benefits of Vitamin D & How to Get It"
              text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
            <NewsBlock
              img={news2}
              date="25 Nov"
              author="Rachi Card"
              title="Our Favourite Summertime Tommeto"
              text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsBlock({ img, date, author, title, text }) {
  return (
    <div className="news__block">
      <p className="news__date">
        <span>{date}</span>
      </p>
      <img src={img} alt="news" />
      <div className="news__page">
        <span className="news__author">By {author}</span>
        <h3 className="news__title">{title}</h3>
        <p className="news__text">{text}</p>
        <Button className="news-second" buttonText="Read More" />
      </div>
    </div>
  );
}
