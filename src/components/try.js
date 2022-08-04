import React, { Component } from "react";
import Slider               from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cities               from "./citiesCatalog/Cities";
import Tryme                from "../tryme";

export default class Try extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
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
        <h2> Single Item</h2>
        <Slider { ...settings }>

          { cities.filter(cities.city == "Miami").map((val) => (

            <Tryme
              image={ val.image }
              image1={ val.image1 }
              image2={ val.image2 }
              image3={ val.image3 }/>
          )) }
        </Slider>
      </div>


    );
  }
}