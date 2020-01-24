import React from "react";
import PropTypes from "prop-types";

import Cyber from "../../images/svg-icons/cyber.svg";

const AltLeader = props => {
    const { scrollToContent, theme } = props;

    return (
        <React.Fragment>
            <section className="leader">
                <Cyber />
                <h3>Is your business protected from emerging cyber threats?</h3>
                <p>Get covered today in less than five minutes to protect your business from hackers.</p>
                <button className="getQuote" onClick={scrollToContent} aria-label="scroll">
                    Get Covered Today
                </button>
            </section>

            {/* --- STYLES --- */}
            <style jsx>{`
        .leader {
          align-items: center;
          background: ${theme.background.color.dark};
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
            margin: 10px auto 40px auto;
            color: white;
        }

        h3 {
            color: ${theme.color.brand.primary};
            padding: ${theme.space.inset.m};
            font-weight: 100;
            font-size: ${theme.font.size.xl};
            line-height: ${theme.font.lineHeight.l};
            padding-bottom: 0;
        }

        button {
          background: ${theme.buttonalt.background};
          border: 1px solid ${theme.color.brand.primary};
          border-radius: ${theme.size.radius.small};
          font-size: ${theme.font.size.m};
          text-transform: uppercase;
          padding: ${theme.space.m} ${theme.space.l};
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
      `}</style>
        </React.Fragment>
    );
};

AltLeader.propTypes = {
    scrollToContent: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
};

export default AltLeader;
