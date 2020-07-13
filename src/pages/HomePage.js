import React, { Component } from "react";
import Hero from "../components/Hero.js";
import Carousel from "../components/Carousel.js";
import Carouselg from "../components/Carouselg.js";
import image from "../wer-01.png";

function HomePage(props) {
  return (
    <div className="backg" style={{ backgroundImage: `url(${image}` }}>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Carouselg />
      <Carousel />
    </div>
  );
}
export default HomePage;
