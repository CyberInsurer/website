import React from "react";
import PropTypes from "prop-types";

const Help = props => {
    // const { title, children, theme } = props;

    return (
        <React.Fragment>
            <div className="tab-content">
                <p class="intro">Please call <a href="tel:08002796617">0800 279 6617</a> and have the following information ready:</p>
                <dl>
                    <dt>Policyholder Details</dt> 
                    <dd>Company name, address and contact person for the claim, insurer and policy number</dd>
                    <dt>Issue Details</dt>
                    <dd>When the issue was discovered, location of the incident and brief description</dd>
                    <dt>Data Breach</dt>
                    <dd>If there is a potential of a data breach, and if so potential number of records exposed</dd>
                    <dt>Third Parties</dt>
                    <dd>Is a third party vendor involved in the incident, if so who are they?</dd>
                    <dt>Actions already taken</dt>
                    <dd></dd>
                </dl>

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
              }

              dt {
                  font-weight: bold;
              }

              dd {
                  margin: 0 0 1.6em;
              }

              p.intro {
                  font-size: 1.6em;
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
