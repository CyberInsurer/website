import PropTypes from "prop-types";
import React from "react";
import { Animated } from "react-animated-css";

import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Help from "../components/Contact/Help";
import Complaints from "../components/Contact/Complaints";
import ChangingForm from "../components/Contact/Changing";
import Seo from "../components/Seo";
import Typed from 'typed.js';
import Cyber from "../images/svg-icons/cyber.svg";

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
      showComplaints: false,
      showHelp: false,
      showChanging: false
    });
  };

  handleChanging = () => {
    this.setState({
      showForm: false,
      showChanging: true,
      showComplaints: false,
      showHelp: false
    });
  };

  handleClaim = () => {
    this.setState({
      showHelp: true,
      showComplaints: false,
      showForm: false,
      showChanging: false
    });
  };

  handleComplaint = () => {
    this.setState({
      showHelp: false,
      showForm: false,
      showComplaints: true,
      showChanging: false
    });
  };

  render() {

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <div className="content">
              <header>
                <Animated className="loop" animationIn="tada" isVisible={true}>
                  <Cyber className="si" />
                </Animated>
                <h2><span
                  style={{ whiteSpace: 'pre' }}
                  ref={(el) => { this.el = el; }}
                /></h2>
              </header>
              <div className="space">
                <a href="https://my.cyberinsurer.uk/quote" className="ant-tab" type="primary">
                  Get a a Quote
                </a>
                <a href="#" className={
                  this.state.showHelp ? 'active-tab' : 'ant-tab'
                } type="primary" onClick={this.handleClaim}>
                  Make a Claim
                </a>
                <a href="#" className={
                  this.state.showChanging ? 'active-tab' : 'ant-tab'
                } type="primary" onClick={this.handleChanging}>
                  Changing Something
                </a>
                <a href="#" className={
                  this.state.showComplaints ? 'active-tab' : 'ant-tab'
                } type="primary" onClick={this.handleComplaint}>
                  Complaints
                </a>
                <a href="#" className={
                  this.state.showForm ? 'active-tab' : 'ant-tab'
                } type="primary" onClick={this.handleForm}>
                  Cancellation
                </a>
              </div>
              <div className="space">
                {this.state.showForm && <Contact />}
                {this.state.showHelp && <Help />}
                {this.state.showComplaints && <Complaints />}
                {this.state.showChanging && <ChangingForm />}
              </div>
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
        .content {
          background: white;
          padding: 40px;
          border-radius: 5px;
          border: 4px solid #DEE9ED;
        }
        header {
          text-align: center;
        }
        .loop {
          animation-iteration-count: infinite !important;
        }
        .si {
          width: 100px;
          animation-iteration-count: infinite !important;
        }
        h2 {
          text-align: center;
          color: #146586;
          font-weight: 400;
          font-size: 21px;
          margin-top: 20px;
        }
        .ant-tab {
          margin-right: 1px;
          padding: 8px;
          background: #50E3C2;
          min-width: 140px;
          width: 19.5%;
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
        .active-tab {
          margin-right: 1px;
          padding: 8px;
          background: #68C8AC;
          min-width: 140px;
          width: 19%;
          text-align: center;
          color: white;
          display: inline-block;
        }
        .active-tab:hover {
          background: #7CDFC3;
        }
        .active-tab:first-child {
          border-radius: 4px 0 0 4px;
        }
        .active-tab:last-child {
          border-radius: 0 4px 4px 0;
        }
      `}</style>
    </React.Fragment>
    );
  };

};

export default ContactPage;
