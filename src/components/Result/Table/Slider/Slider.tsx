import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./style.module.css";
import { useRef } from "react";
import Slide from "../Slide/Slide";

const data = [
  { first: "cat", second: "dog", third: "bird" },
  { first: "red", second: "blue", third: "green" },
  { first: "car", second: "bike", third: "bus" },
  { first: "sun", second: "moon", third: "star" },
  { first: "pen", second: "pencil", third: "eraser" },
  { first: "apple", second: "banana", third: "cherry" },
  { first: "cup", second: "plate", third: "spoon" },
  { first: "tree", second: "bush", third: "grass" },
  { first: "rock", second: "sand", third: "soil" },
  { first: "rain", second: "snow", third: "wind" },
];

export function SliderTable() {
  const slidesRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1307,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1174,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 908,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const nextSlide = () => {
    slidesRef?.current?.slickNext();
    console.log("Next");
  };

  const prevSlide = () => {
    slidesRef?.current?.slickPrev();
    console.log("Previous");
  };

  return (
    <div className={style.cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
        onClick={prevSlide}
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>

      <div className={style.header}>
        <p>Период</p>
        <p>Всего</p>
        <p>Риски</p>
      </div>
      <div className={style.sliderWrapper}>
        <Slider {...settings} ref={slidesRef}>
          {data.map((item, index) => (
            <Slide key={index} item={item} />
          ))}
        </Slider>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
        onClick={nextSlide}
      >
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    </div>
  );
}
