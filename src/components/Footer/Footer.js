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
            <li><em><FaTwitterSquare /></em> <a href="https://twitter.com/CyberInsurerUK" target="_blank">Twitter</a></li>
            <li><em><FaLinkedin /></em> <a href="https://www.linkedin.com/company/cyber-insurer-uk/" target="_blank">Linkedin</a></li>
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
          padding: ${theme.space.inset.s};
          min-height: 300px;
        }

        .column {
          display: inline-block;
          vertical-align: top;
          width: 100%;
          text-align: center;
          padding: ${theme.space.inset.m};
        }

        .group {
          display: inline-block;
          width: 100%;
        }

        h4 {
          color: #536B74;
          font-weight: 200;
          padding-bottom: ${theme.space.inset.xs};
        }

        ul {
          list-style: none;
          margin-bottom: ${theme.space.inset.m};
        }

        li {
          color: white;
          padding: ${theme.space.inset.xs} 0;
        }

        a {
          color: white;
          text-decoration: none;
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

        @from-width tablet {
          
          .footer {
            padding: ${theme.space.inset.l};
            text-align: left;
          }

          ul {
            margin-bottom: 0;
            text-align: left;
          }

          .column {
            display: inline-block;
            vertical-align: top;
            width: 33%;
            text-align: left;
          }

          .group {
            display: inline-block;
            width: 50%;
            vertical-align: top;
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
