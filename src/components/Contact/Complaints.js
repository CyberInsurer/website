import React from "react";
import PropTypes from "prop-types";

const Complaints = props => {
    // const { title, children, theme } = props;

    return (
        <React.Fragment>
            <div className="tab-content">
                <p class="intro">We’re really sorry if it feels like we have let you down and whatever it is we want to put it right, quickly with no fuss and in a way that makes you happy.</p>
                <p>Our policy is underwritten by QBE, one of the largest insurers and reinsurers in the World. We’d like you to be able to speak with them directly to ensure independent, impartial and professional resolution of your complaint. </p>
                <p>You can reach QBE by:</p>
                <dl>
                    <dt>Calling</dt>
                    <dd>020 7105 5988</dd>
                    <dt>Emailing</dt>
                    <dd>customerrelations@uk.qbe.com</dd>
                    <dt>Writing</dt>
                    <dd>Customer Relations<br />
                        QBE European Operations<br />
                        Plantation Place<br />
                        30 Fenchurch Street<br />
                        London<br />
                        EC3M 3BD<br />
                    </dd>
                </dl>
                <p>Thanks</p>
                <p>Si.</p>
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

              p {
                  margin: 0 0 1.6em;
                  clear: both;
              }

              dt {
                font-weight: bold;
                display: block;
                float: left;
                clear: left;
                width: 180px;
              }

              dd {
                  margin: 0 0 1.6em;
                  display: block;
                  float: left;
              }

              p.intro {
                  font-size: 1.6em;
              }

            `}</style>
        </React.Fragment>
    );
};

Complaints.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object.isRequired
};

export default Complaints;
