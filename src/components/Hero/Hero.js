import React from "react";
import PropTypes from "prop-types";
import Typed from 'typed.js';
import Curve from "../../images/png/curve.png";

class Hero extends React.Component {

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ["entrepreneurs...", "agencies...", "freelancers...", "start ups..."],
      typeSpeed: 75,
      backSpeed: 30,
      backDelay: 750,
      loop: true
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

  const { scrollToContent, strings, theme } = this.props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          Insurance for <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
        </h1>
        <h2>
          Protect your business from as little as &pound;29.99
        </h2>
        <button onClick={scrollToContent} aria-label="scroll">
          Get Covered Today
        </button>
        <p>Get a personalised quote in under 60 seconds...</p>
      </section>
      <span className="curve" />

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          color: ${theme.text.color.primary};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 80vh;
          height: 100px;
          padding: ${theme.space.inset.l};
        }

        .curve {
          display: block;
          width: 100%;
          height: 74px;
          background: url(${Curve}) no-repeat center;
          background-size: cover;
          align-items: left;
          text-align: left;
          position: absolute;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          font-weight: 200;
          margin: ${theme.space.stack.s};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        h2 {
          margin-bottom: ${`calc(${theme.space.xl} * 2.5)`};
          font-size: ${theme.hero.h2.size};
        }

        button {
          background: ${theme.button.background};
          border: 1px solid ${theme.color.brand.darkActive};
          border-radius: ${theme.size.radius.small};
          font-size: ${theme.font.size.m};
          text-transform: uppercase;
          padding: ${theme.space.s} ${theme.space.l};
          cursor: pointer;
          color: ${theme.color.neutral.white};
          margin-bottom: ${theme.space.xs};
          
          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
          }
        }

        p {
          font-size: ${theme.font.size.xs};
        }

        @from-width tablet {
          
          .hero {
            padding-top: 160px;
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          h2 {
            margin-bottom: ${`calc(${theme.space.xl} * 3)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }

        @from-width desktop {

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }
      `}</style>
    </React.Fragment>
  );
  };

};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
