import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const style = {
    componentName: {},
    col: {},
    countup: {},
};

class Stats extends React.Component {

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
                top: 10
            }} delayedCall>
            <section className="stats">
                
                <div className="stat">
                        <h3><CountUp className={style.countup} decimals={0} start={0} end={this.state.didViewCountUp ? 74 : 0}
                            suffix="%" duration={3} /></h3>
                    <p>of SMEs suffered a security breach in the last 12 months</p>
                </div>

                <div className="stat">
                        <h3><CountUp className={style.countup} decimals={0} start={0} end={this.state.didViewCountUp ? 48 : 0}
                            suffix="%" duration={3} /></h3>
                    <p>of all crimes are cyber or fraud related</p>
                </div>

                <div className="stat">
                        <h3><CountUp className={style.countup} decimals={1} start={0} end={this.state.didViewCountUp ? 75 : 0}
                            prefix="&pound;" suffix="k" duration={3} /></h3>
                    <p>is the average cost to an SME for a data breach</p>
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
            font-size: ${theme.font.size.xs};
            color: ${theme.color.neutral.gray.e};
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

Stats.propTypes = {
    theme: PropTypes.object.isRequired
};

export default Stats;
