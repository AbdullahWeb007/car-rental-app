import React            from 'react';
import Catalog          from '../carCatalog/Catalog';
import data             from '../carCatalog/data';
import Home             from '../home/home';
import Footer           from '../Footer/Footer';
import { Box }          from '@mui/material';
import { Grid }         from '@mui/material';
import ResponsiveAppBar from '../navbar/navbar';
import InputLabel       from '@mui/material/InputLabel';
import MenuItem         from '@mui/material/MenuItem';
import FormControl      from '@mui/material/FormControl';
import Select           from '@mui/material/Select';
import Feedback         from '../../feedback/Feedback';
import { connect }      from 'react-redux';
import DatePicker       from '../dataPicker/DatePicker';
import './city.css';
import "aos";

const City = (props, { value }) => {
  const [Location, setLocation] = React.useState('');
  const [Location1, setLocation1] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChange1 = (event) => {
    setLocation1(event.target.value);
  };
  return (
    <>
      <div>
        <ResponsiveAppBar/>
        <div className='head' style={ { backgroundImage: `url(${ props.image })` } }>
          <div className='d1'></div>
          <div className='d2'> { !!value ? value : "" } We are now at<span
            style={ { fontSize: "60px", color: "#A48111", fontWeight: "600", width: "90%" } }> { props.city } </span> to
            provide you the best car service of the town
          </div>
          <div className='d3'>So, come to us to experience the best drives of the town</div>
          <div className="datePicker">

            <div className="dateSetting2">
              <DatePicker/>
            </div>

          </div>
        </div>

        <div data-aos="fade-up"
             style={ { fontSize: "30px", marginTop: "3%", textAlign: "center", color: "#A48111" } }>So, let's Explore
          our Cars!
        </div>
        <hr style={ { width: "80%" } }/>
        <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
          <div style={ { fontSize: "26px", marginLeft: "6%", marginTop: "3%" } }><strong>The Best cars
            at { props.city }</strong></div>
          <div style={ { fontSize: "16px", marginLeft: "6%", marginTop: "1%", opacity: ".7", width: "70%" } }>Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries
          </div>
          {/* <Catalog/> */ }

          <div data-aos="fade-up" style={ { display: "flex", width: "100%" } }>
            <div style={ { flex: "2%", marginLeft: "4%" } }><Box sx={ { minWidth: 120 } } style={ {
              marginTop: "40px",
              width: "200px",
              marginLeft: "5%",
              backgroundColor: "white"
            } }>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ Location1 }
                  label="Make"
                  onChange={ handleChange1 }
                >
                  <MenuItem value={ 10 }>Audi</MenuItem>
                  <MenuItem value={ 20 }>Lamborghini</MenuItem>
                  <MenuItem value={ 30 }>Range Rover</MenuItem>
                  <MenuItem value={ 40 }>Land Cruiser</MenuItem>
                  <MenuItem value={ 50 }>Honda Civic</MenuItem>
                  <MenuItem value={ 60 }>Poarshe</MenuItem>
                </Select>
              </FormControl>
            </Box></div>
            <div style={ { flex: "70%" } }>
              <Box sx={ { minWidth: 120 } }
                   style={ { marginTop: "40px", width: "200px", marginLeft: "5%", backgroundColor: "white" } }>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Model</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ Location }
                    label="Model"
                    onChange={ handleChange }
                  >
                    <MenuItem value={ 10 }>2011</MenuItem>
                    <MenuItem value={ 20 }>2012</MenuItem>
                    <MenuItem value={ 30 }>2013</MenuItem>
                    <MenuItem value={ 40 }>2014</MenuItem>
                    <MenuItem value={ 50 }>2021</MenuItem>
                    <MenuItem value={ 60 }>2022</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

          </div>


          <Box className='boxh' data-aos="fade-up">
            <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 1, sm: 8, md: 12 } }>
              { data.map((val) => (
                <Grid item xs={ 2 } sm={ 4 } md={ 4 }>
                  <Home
                    image={ val.image }
                    title={ val.title }
                    description={ val.description }
                  />
                </Grid>)) }
            </Grid>

          </Box>
        </div>

        <div className='main' data-aos="fade-up">
          <div className='left'>
            <div className='left-content' style={ { backgroundImage: `url(${ props.image })` } }>

            </div>
          </div>
          <div className='right'>
            <div className='right-content'>
              <div style={ { textAlign: "center", width: "60%", margin: "auto", marginTop: "10%" } } className>
                <h2 style={ { color: "#A48111" } }>Hello World</h2>
                <div style={ { fontSize: "20px", textAlign: "center", fontWeight: "600", opacity: ".7" } }>This ia a
                  great city to explore, so get our best cars in the whole town to explore them!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={ { textAlign: "center", marginTop: "70px" } }>
          <h1 style={ { textAlign: "center", color: "#A48111" } }>Best Towns in { props.city }</h1>
          <h4 style={ { margin: "auto", opacity: ".7", fontWeight: "500", width: "80%", textAlign: "center" } }>Almost
            all the towns of Newyork are extremely great, but here is some we most love!</h4>
          <hr style={ { width: "80%" } }/>
          <div className="TownEdit">
            <div className="TownEdit-1">
              <h3>Town 1</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
            <div className="TownEdit-2">
              <h3>Town 2</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
            <div className="TownEdit-3">
              <h3>Town 3</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="CatalogStyle" data-aos="fade-up">
        <div style={ { marginLeft: "6%", paddingTop: "4%", paddingBottom: "3%" } }>
          <h3 style={ { color: "#A48111" } }>Our best hosts in { props.city }</h3>
          <div style={ { opacity: ".7", fontWeight: "500" } }>Lorem Ipsum is simply dummy text of the printing s,</div>
          <hr style={ { width: "80%" } }/>
          <Catalog/>
        </div>
      </div>

      <div className='main1' data-aos="fade-up">
        <div className='left1'>
          <div className='left-content1'>
            <div style={ { textAlign: "center", width: "60%", margin: "auto", marginTop: "10%" } }>
              <h2 style={ { textAlign: "center", color: "#A48111" } }>Hello World</h2>
              <div style={ { fontSize: "20px", textAlign: "center", fontWeight: "600", opacity: ".7" } }>This ia a great
                city to explore, so get our best cars in the whole town to explore them!
              </div>
            </div>
          </div>
        </div>

        <div className='right1'>
          <div className='right-content1' style={ { backgroundImage: `url(${ props.image })` } }></div>
        </div>
      </div>

      <div style={ { marginTop: "70px", width: "100%", marginBottom: "5%", backgroundColor: "#F0F0F0" } }>
        <div style={ { marginLeft: "6%", paddingTop: "4%", paddingBottom: "3%" } }>
          <h3 style={ { color: "#A48111" } }>Reviews and Feedbacks</h3>
          <div style={ { opacity: ".7", fontWeight: "500" } }>Lorem Ipsum is simply dummy text of the printing s,</div>
          <hr style={ { width: "80%" } }/>
          <Feedback data-aos="fade-up"/>
        </div>
      </div>
      <Footer data-aos="fade-up"/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.data.data
  }
}

export default connect(mapStateToProps, {})(City);