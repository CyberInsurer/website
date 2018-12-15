import React from "react";
import PropTypes from "prop-types";

import Cyber from "../../images/svg-icons/cyber.svg";

const Pitch = props => {
    const { theme } = props;

    return (
        <React.Fragment>
            <section className="pitch">
                <Cyber />
                <p>Cyber insurance is one of the UK’s fastest growing types of insurance. But is your business prepared for the repercussions of a cyber hack, data held to ransom or extortion, or a third-party data breach?</p>
            </section>

            {/* --- STYLES --- */}
            <style jsx>{`
        .pitch {
          align-items: center;
          background: ${theme.button.background};
          color: ${theme.color.neutral.white};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 300px;
          font-size: ${theme.font.size.xl};
          line-height: ${theme.font.lineHeight.xl};
          text-align: center;
          padding: ${theme.space.inset.l};
        }

        p {
            max-width: 640px;
            margin: 20px auto;
        }
      `}</style>
        </React.Fragment>
    );
};

Pitch.propTypes = {
    theme: PropTypes.object.isRequired
};

export default Pitch;
