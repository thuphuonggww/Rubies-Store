import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer-enhanced">
      <div className="footer-container">
        {/* Column 1: Logo (nằm cùng hàng) */}
        <div className="footer-section">
          <Link to="/">
            <img
              src="https://bizweb.dktcdn.net/100/462/587/themes/880841/assets/logo.png?1742273854577"
              alt="Logo"
              width="150"
              height="80"
              className="footer-logo"
            />
          </Link>
        </div>

        {/* Column 2: Address */}
        <div className="footer-section">
          <h4>Address</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">
                98A, Đặng Thùy Trâm, Phường 13, Quận 1, TP.HCM
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                123B, Nguyễn Thị Minh Khai, Quận 3, TP.HCM
              </Link>
            </li>
            <li>
              <Link to="/contact">
                45C, Lê Văn Sỹ, Phường 12, Quận Tân Bình, TP.HCM
              </Link>
            </li>
            <li>
              <Link to="/contact">
                77D, Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP.HCM
              </Link>
            </li>
            <li>
              <Link to="/contact">112E, Trường Chinh, Quận 12, TP.HCM</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <FaPhone /> 0123 456 789
          </p>
          <p>
            <FaEnvelope /> support@yourbrand.com
          </p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/rubiesin2015/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Rubies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
