import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a food delivery app that brings you delicious meals from your favorite restaurants right to your doorstep.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street<br/> Anytown, USA 12345<br/> Phone: (555) 555-5555<br/> Email: info@fooddeliveryapp.com</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="facebook">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="twitter">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="instagram">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right text-center">
        <p>© 2023 Food Delivery App. All rights reserved.</p>
        <p className="made-with-love">Made with <span className="heart">♥</span> by Raja Naveed</p>
      </div>
    </footer>
  );
}

export default Footer;
