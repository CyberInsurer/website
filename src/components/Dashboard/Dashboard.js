import React from "react";
import PropTypes from "prop-types";

import Screen from "../../images/png/dashboard@2x.png";

const Dashboard = props => {
    const { theme } = props;

    return (
        <React.Fragment>
            <section className="leader">
            <h3>100% Paperless : All your documents in one place and available to you 24/7/365</h3>
            </section>

            {/* --- STYLES --- */}
            <style jsx>{`
        .leader {
          align-items: center;
          background: ${theme.background.color.alt} url(${Screen}) no-repeat center bottom;
          background-size: 80%;
          color: ${theme.color.brand.dark};
          min-height: 440px;
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
            font-weight: 100;
            font-size: ${theme.font.size.xl};
            line-height: ${theme.font.lineHeight.l};
        }

        @from-width desktop {

          .leader {
            min-height: 600px;
            background-size: 50%;
          }
          
        }

      `}</style>
        </React.Fragment>
    );
};

Dashboard.propTypes = {
    scrollToContent: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
};

export default Dashboard;
