import React from "react";
import PropTypes from "prop-types";

import Logo from "../../images/svg-icons/logo-white.svg";
import { FaRssSquare, FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa/";

const Footer = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <footer className="footer">

        <div className="column">
          <Logo />
        </div>
        <div className="column">
          <div className="group">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Articles</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="group">
            <h4>Legal</h4>
            <ul>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <h4>Social</h4>
          <ul>
            <li><em><FaRssSquare /></em> Blog</li>
            <li><em><FaTwitterSquare /></em> Twitter</li>
            <li><em><FaFacebookSquare /></em> Facebook</li>
            <li><em><FaLinkedin /></em> Linkedin</li>
          </ul>
        </div>
        
      </footer>

      <footer className="copyright">

        <p>&copy; 2018 CyberInsurer Limited. All rights reserved.</p>

      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.gray.b};
          padding: ${theme.space.inset.l};
          min-height: 300px;
        }

        .column {
          display: inline-block;
          vertical-align: top;
          width: 33%;
        }

        .group {
          display: inline-block;
          width: 40%;
        }

        h4 {
          color: #536B74;
          font-weight: 200;
          padding-bottom: ${theme.space.inset.xs};
        }

        ul {
          list-style: none;
        }

        li {
          color: white;
          padding: ${theme.space.inset.xs} 0;
        }

        em {
          color: ${theme.color.brand.primary};
          padding-right: ${theme.space.inset.xs};
          display: inline-block;
        }

        .copyright {
          background: #011821;
          padding: ${theme.space.inset.m} ${theme.space.inset.l};
          color: white;
          font-size: ${theme.font.size.xs}
        }

        @from-width desktop {
          .footer {
            padding: ${theme.space.inset.l};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
