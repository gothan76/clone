import React from "react";
import Slider from "react-slick";
import add1 from "../image/adds_image1.jpg";
import add2 from "../image/adds_image2.jpg";
import add3 from "../image/adds_image3.jpg";
import add4 from "../image/adds_image4.jpg";
import add5 from "../image/adds_image5.jpg";
import "../HomePage/adds.css";

const Adds = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div id="add">
      <Slider {...settings}>
        <div>
          <img src={add1} alt="" />
        </div>
        <div>
          <img src={add2} alt="" />
        </div>
        <div>
          <img src={add3} alt="" />
        </div>
        <div>
          <img src={add4} alt="" />
        </div>
        <div>
          <img src={add5} alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Adds;
