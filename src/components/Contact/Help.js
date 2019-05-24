import React from "react";
import PropTypes from "prop-types";

const Help = props => {
    // const { title, children, theme } = props;

    return (
        <React.Fragment>
            <div className="tab-content">
                <p>Please call 0800 279 6617 and have your policy number ready.</p>
            </div>
            {/* --- STYLES --- */}
            <style jsx>{`
            .tab-content {
                -webkit-animation: fadein 1s;
                -moz-animation: fadein 1s;
                -ms-animation: fadein 1s;
                -o-animation: fadein 1s;
                animation: fadein 1s;
              }
              @keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-moz-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-webkit-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-ms-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-o-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }
            `}</style>
        </React.Fragment>
    );
};

Help.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object.isRequired
};

export default Help;
