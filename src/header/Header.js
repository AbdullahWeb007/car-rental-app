import "./header.css"
import React, { useState } from 'react';
import Button              from '@mui/material/Button';
import Stack               from '@mui/material/Stack';
import ResponsiveAppBar    from "../components/navbar/navbar"
import Catalog             from "../components/carCatalog/Catalog";
import CitiesCatalog       from "../components/citiesCatalog/CitiesCatalog";
import Footer              from "../components/Footer/Footer";
import Feedback            from "../feedback/Feedback";
import "aos";
import { connect }         from "react-redux";
import { GetCityData }     from "../components/action/action";
import { NavLink }         from "react-router-dom";
import DatePicker          from "../components/dataPicker/DatePicker";

const Header = ({ GetCityData, value }) => {

  return (
    <>
      <ResponsiveAppBar/>
      <div className="header">
        <div className="header1"></div>
        <div></div>
        <div className='left'>
          <div className='leftcontent'>{ value } The best Car Rental Service that you deserve, come to us</div>
          <p className='smallpara'>Start your dream car journey with us, we will find best for you!</p>
          <NavLink
            to='/signin'

          >
            <Stack direction="row" spacing={ 2 }>
              <Button variant="contained" onClick={ () => GetCityData("") } className="contactButton"
                      style={ { margin: "auto", backgroundColor: "#A48111", marginTop: "12px" } }>
                <div> Sign in</div>
              </Button>
            </Stack>
          </NavLink>
          <div className="datePicker2">
            <div className="dateSetting">
              <DatePicker style={ { marginLeft: "20%" } }/>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='rightImg'></div>
        </div>
      </div>

      <div data-aos="fade-up" style={ { fontSize: "30px", marginTop: "3%", textAlign: "center" } }>This time to travel
        in your desired <strong><span style={ { color: "#A48111", fontSize: "40px" } }>Cars!</span></strong></div>
      <hr style={ { width: "80%" } }/>
      <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
        <div style={ { fontSize: "26px", marginLeft: "6%", marginTop: "3%" } }><strong>Our <span
          style={ { color: "#A48111" } }>Feautured</span> Cars</strong></div>
        <div style={ { fontSize: "16px", marginLeft: "6%", marginTop: "2%", opacity: ".7", width: "70%" } }>Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
        </div>

        <div style={ { marginTop: "3%" } }>
          <Catalog/></div>
      </div>
      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "4%" } }>
        <div style={ { flex: "60%" } }>
          <div style={ { height: "70%", width: "80%" } } className="browse"></div>
        </div>

        <div className="righth"><h2><strong style={ { color: "#A48111" } }>Vacations?</strong> So, Let's Go!</h2>
          <div style={ { textAlign: "center" } }>
            <div style={ { fontSize: "16px", marginTop: "1%", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            </div>
          </div>
        </div>

      </div>
      <div data-aos="fade-up">
        <div style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
          <div style={ { fontSize: "26px", marginLeft: "6%", marginTop: "3%" } }><strong>Do you want to go on <span
            style={ { color: "#A48111" } }>VACATIONS!</span></strong></div>
          <div style={ { fontSize: "16px", marginLeft: "6%", marginTop: "1%", opacity: ".7", width: "70%" } }>Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries
          </div>
        </div>

        <CitiesCatalog/></div>

      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "4%" } }>
        <div className="left2"><h2><strong style={ { color: "#A48111" } }>Our Clients</strong> Explore them</h2>
          <div style={ { textAlign: "center" } }>
            <div style={ { fontSize: "16px", marginLeft: "6%", marginTop: "1%", opacity: ".7", margin: "auto" } }>Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type
            </div>
          </div>
          <Stack direction="row" spacing={ 2 }>
            <Button variant="contained" className="contactButton" style={ {
              margin: "auto",
              backgroundColor: "#A48111",
              marginTop: "30px",
              width: "150px",
              height: "48px"
            } }>
              <div>Explore</div>
            </Button>
          </Stack>
        </div>
        <div style={ { flex: "60%" } }>
          <div style={ { height: "70%", width: "80%" } } className="browse2"></div>
        </div>

      </div>

      <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
        <div style={ { fontSize: "26px", marginLeft: "6%", marginTop: "6%" } }><strong>Our Happy <span
          style={ { color: "#A48111" } }>Customers!</span></strong></div>
        <div style={ { fontSize: "16px", marginLeft: "6%", marginTop: "1%", opacity: ".7", width: "70%" } }>Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
        </div>
        <Feedback/></div>
      <div style={ { marginTop: "5%" } }></div>
      <div data-aos="fade-up">
        <Footer/>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetCityData: data => dispatch(GetCityData(data))
  }

}

const mapStateToProps = (state) => {
  return {
    value: state.data.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
{/* <Navbar/> */
}