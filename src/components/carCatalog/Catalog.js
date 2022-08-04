import React, { Component } from "react";
import Slider               from "react-slick";
import data                 from "./data";
import Home                 from "../home/home";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { NavLink, Link }    from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Catalog.css';

export default class Catalog extends Component {
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
        <span><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right"/></span>
        <Slider { ...settings }>

          { data.map((val) => (
            <nav>
              <NavLink
                to={ `/carDescription/${ val.id }` }

              >
                <Home
                  image={ val.image1 }
                  title={ val.title }
                  description={ val.description }
                /></NavLink>
            </nav>
          )) }
        </Slider>
      </div>


    );
  }
}