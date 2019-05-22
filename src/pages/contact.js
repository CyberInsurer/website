import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Typed from 'typed.js';
import Button from "antd/lib/button";

class ContactPage extends React.Component {

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
              <Button className="ant-tab" type="primary" htmlType="submit">
                Get a a Quote
              </Button>
              <Button className="ant-tab" type="primary" htmlType="submit">
                Make a Claim
              </Button>
              <Button className="ant-tab" type="primary" htmlType="submit">
                Something Else?
              </Button>
            </div>
            <div className="space">
              <Contact theme={theme} />
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
          margin-right: 4px;
          padding: 4px;
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