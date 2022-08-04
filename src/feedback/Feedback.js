import React, { Component } from "react";
import Slider               from "react-slick";
import Home                 from "../components/home/home";
import feedbackdata         from "./feedbackdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/carCatalog/Catalog.css'


export default class Feedback extends Component {
  render() {
    var settings = {
      infinite: false,
      button: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="catalog">
        <Slider { ...settings }>
          { feedbackdata.map((val) => (
            <Home
              image={ val.image }
              title={ val.title }
              description={ val.description }
            />
          )) }
        </Slider>
      </div>
    );
  }
}