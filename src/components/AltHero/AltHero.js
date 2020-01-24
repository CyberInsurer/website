import React from "react";
import PropTypes from "prop-types";
import Curve from "../../images/png/curve.png";

class AltHero extends React.Component {

  componentDidMount() {
    
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
          Protecting Small Businesses from Hackers and Cyber Attacks
        </h1>
        <h2>
          Up to £1m of cover &bull; 24/7 emergency hotline Cash payouts &bull; Legal &amp; Data Forensic costs
        </h2>
        <button className="getQuote" onClick={scrollToContent} aria-label="scroll">
          Get Covered Today
        </button>
        <p>Get a personalised quote in under 60 seconds...</p>
      </section>
      <span className="curve" />

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: url('bg.jpg') no-repeat;
          background-size: cover;
          color: ${theme.text.color.primary};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 90vh;
          height: 100px;
          padding: ${theme.space.inset.l};
        }

        .curve {
          display: block;
          width: 100%;
          height: 74px;
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
          color: white;
          line-height: ${theme.hero.h1.lineHeight};

          :global(strong) {
            position: relative;
          }
        }

        h2 {
          margin-bottom: ${`calc(${theme.space.xl} * 2.5)`};
          font-size: 1.4em;
          line-height: 1.3em;
          color: ${theme.color.brand.primary};
          max-width: 380px;
          text-align: center;
        }

        button {
          background: ${theme.buttonalt.background};
          border: 1px solid ${theme.color.brand.primary};
          border-radius: ${theme.size.radius.small};
          font-size: ${theme.font.size.m};
          text-transform: uppercase;
          padding: ${theme.space.m} ${theme.space.xl};
          cursor: pointer;
          color: ${theme.color.neutral.white};
          margin-bottom: ${theme.space.xs};
          min-height: 44px;
          
          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :hover {
            background: ${theme.buttonalt.hover};
            border: 1px solid ${theme.color.brand.primaryActive};
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
            padding-top: 220px;
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
            margin-bottom: ${`${theme.space.l}`};
          }

          h2 {
            margin-bottom: ${`calc(${theme.space.xl} * 2)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }

        @from-width desktop {

          h1 {
            max-width: 600px;
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

AltHero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default AltHero;
