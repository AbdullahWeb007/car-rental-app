import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Service A</a></li>
                  <li><a href="#">Service B</a></li>
                  <li><a href="#">Service C</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>ExtraForeigns</h3>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five centuries, </p>
              </div>
              <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a
                href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i
                className="icon ion-social-snapchat"></i></a><a href="#"><i
                className="icon ion-social-instagram"></i></a></div>
            </div>
            <p className="copyright">ExtraForeigns © 2018</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
