import { React, useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import "./Slider.scss";
const Slider = () => {
  const data = [
    "../../img/landing-1.jpg",
    "../../img/landing-2.jpg",
    "../../img/landing-3.jpg",
    "../../img/landing-4.jpg",
    // "../../img/landing-4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(changeSlide);
  }),
    [currentSlide];
  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `calc(${data.length * 100})`,
        }}
      >
        <img className="blur blur0" src={data[0]} alt="img1" />
        <img src={data[0]} alt="img1" />
        <img className="blur blur1" src={data[1]} alt="img1" />
        <img src={data[1]} alt="img2" />
        <img className="blur blur2" src={data[2]} alt="img1" />
        <img src={data[2]} alt="img3" />
        <img className="blur blur3" src={data[3]} alt="img1" />
        <img src={data[3]} alt="img4" />
        {/* <img className="blur blur3" src={data[4]} alt="img1" />
        <img src={data[4]} alt="img4" /> */}
      </div>
      <div className="icons">
        <div onClick={prevSlide} className="icon">
          <WestIcon />
        </div>
        <div onClick={nextSlide} className="icon">
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
