import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Help from "../components/Contact/Help";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Typed from 'typed.js';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showHelp: false
    };
  }

  componentDidMount() {

    const options = {
      strings: [
        "Greetings! I'm Si.",
        "How can I help you today?", 
        "Si, at your service.",
        "Choose from one of the options below..."
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 750,
      loop: false
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  handleForm = () => {
    this.setState({
      showForm: true,
      showHelp: false
    });
  };

  handleClaim = () => {
    this.setState({
      showHelp: true,
      showForm: false
    });
  };

  render() {

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Contact Us" theme={theme} />
              <h2><span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
              /></h2>
            </header>
            <div className="space">
              <a href="https://my.cyberinsurer.staging.incrementby.one/quote" className="ant-tab" type="primary" htmlType="submit">
                Get a a Quote
              </a>
              <a href="#" className="ant-tab" type="primary" htmlType="submit" onClick={this.handleClaim}>
                Make a Claim
              </a>
              <a href="#" className="ant-tab" type="primary" htmlType="submit" onClick={this.handleForm}>
                Something Else?
              </a>
            </div>
            <div className="space">
              {this.state.showForm && <Contact />}
              {this.state.showHelp && <Help />}
            </div>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo />
      {/* --- STYLES --- */}
      <style jsx>{`
        .space {
          margin: 30px 0;
        }
        .ant-tab {
          margin-right: 1px;
          padding: 8px;
          background: #68C8AB;
          min-width: 140px;
          width: 32%;
          text-align: center;
          color: white;
          display: inline-block;
        }
        .ant-tab:hover {
          background: #7CDFC3;
        }
        .ant-tab:first-child {
          border-radius: 4px 0 0 4px;
        }
        .ant-tab:last-child {
          border-radius: 0 4px 4px 0;
        }
      `}</style>
    </React.Fragment>
    );
  };

};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;