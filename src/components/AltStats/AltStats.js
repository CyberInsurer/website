import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from 'react-visibility-sensor';

import IconTime from "../../images/svg-icons/time.svg";
import IconSafe from "../../images/svg-icons/safe.svg";
import IconCover from "../../images/svg-icons/cover.svg";


const style = {
    componentName: {},
    col: {},
    countup: {},
};

class AltStats extends React.Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    render() {

    const { theme } = this.props;

    return (
        <React.Fragment>
            <VisibilitySensor onChange={this.onVisibilityChange} offset={{
                top: 40
            }} delayedCall partialVisibility>
            <section className="stats">
                
                <div className="stat">
                        <h3><IconTime /></h3>
                        <p>Get covered in under 5 minutes</p>
                </div>

                <div className="stat">
                        <h3><IconSafe /></h3>
                        <p>Up to &pound;1m of insurance cover</p>
                </div>

                <div className="stat">
                        <h3><IconCover /></h3>
                        <p>Underwritten by QBE Group at Top 20 Global Insurer</p>
                </div>

            </section>

            </VisibilitySensor>

            {/* --- STYLES --- */}
            <style jsx>{`
        .stats {
          background: ${theme.color.neutral.white};
          color: ${theme.color.brand.dark};
          font-size: ${theme.font.size.l};
          line-height: ${theme.font.lineHeight.xl};
          text-align: center;
          padding: ${theme.space.inset.l};
        }

        .stat {
            display: inline-block;
            width: 100%;
            vertical-align: top;
            padding: ${theme.space.inset.l};
            margin:  ${theme.space.inline.default};
        }

        p {
            margin: 20px auto;
            font-size: ${theme.font.size.s};
            color: ${theme.color.brand.dark};
        }

        h3 {
            color: ${theme.color.brand.dark};
            max-width: 380px;
            font-weight: bold;
            font-size: 64px;
            line-height: 0.5em;
        }

        @from-width tablet {

            .stat {
                display: inline-block;
                width: 25%;
                max-width: 270px;
            }

        }

      `}</style>
        </React.Fragment>
    );
    };
};

AltStats.propTypes = {
    theme: PropTypes.object.isRequired
};

export default AltStats;
