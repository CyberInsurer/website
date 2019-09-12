import React from "react";
import PropTypes from "prop-types";

import Cyber from "../../images/svg-icons/cyber.svg";

const Leader = props => {
    const { scrollToContent, theme } = props;

    return (
        <React.Fragment>
            <section className="leader">
                <Cyber />
                <h3>Is your business protected from emerging cyber threats?</h3>
                <p>Cyber Insurer simplifies business insurance for startups, micro businesses & SMEs allowing you to purchase peace of mind.</p>
                <p>Protect your business with cyber insurance from £37.63 per month</p>
                <button onClick={scrollToContent} aria-label="scroll">
                    Get Covered Today
                </button>
            </section>

            {/* --- STYLES --- */}
            <style jsx>{`
        .leader {
          align-items: center;
          background: ${theme.background.color.alt};
          color: ${theme.color.brand.dark};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 300px;
          font-size: ${theme.font.size.l};
          line-height: ${theme.font.lineHeight.xl};
          text-align: center;
          padding: ${theme.space.inset.l};
        }

        p {
            max-width: 640px;
            margin: 20px auto;
        }

        h3 {
            color: ${theme.color.brand.primary};
            padding: ${theme.space.inset.m};
            max-width: 380px;
            font-weight: 100;
            font-size: ${theme.font.size.xl};
            line-height: ${theme.font.lineHeight.l};
        }

        button {
          background: ${theme.button.background};
          border: 1px solid ${theme.color.brand.darkActive};
          border-radius: ${theme.size.radius.small};
          font-size: ${theme.font.size.xs};
          text-transform: uppercase;
          padding: ${theme.space.s} ${theme.space.l};
          cursor: pointer;
          color: ${theme.color.neutral.white};
          
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
      `}</style>
        </React.Fragment>
    );
};

Leader.propTypes = {
    scrollToContent: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
};

export default Leader;
