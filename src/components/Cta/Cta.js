import React from "react";

class Cta extends React.Component {

    render() {

        const { theme } = this.props;

        const scrollToContent = e => {
            location.href = "https://my.cyberinsurer.uk/quote"
        };

        return (
            <React.Fragment>
            <div className="quoteBox">
                <h1>Get a Quote Today</h1>
                    <p>With cover available from as little as £37.63 per month, Cyber Insurer UK provides an innovative insurance product which can protect your business.</p>
                <p>Get a quote today in under 60 seconds and protect your business with Cyber Insurer UK</p>
                <button className="getQuote" onClick={scrollToContent} aria-label="scroll">
                Get Covered Today
                </button>
            </div>

        <style jsx>{`

            .quoteBox {
                display: block;
                background: #F8FAFA;
                padding: 20px;
                text-align: center;
                margin: 4em auto;

                h1 {
                    margin: 1em 10px;
                    color: #50E3C2;
                    font-weight: 400;
                }

                p {
                    margin: 1em auto;
                    max-width: 520px;
                    color: #146586;
                    line-height: 1.4em;
                }

                button {
                    margin: 30px auto;
                    display: block;
                }
            }

            button {
                background: ${theme.button.background};
                border: 1px solid ${theme.color.brand.darkActive};
                border-radius: ${theme.size.radius.small};
                font-size: ${theme.font.size.m};
                text-transform: uppercase;
                padding: ${theme.space.s} ${theme.space.l};
                cursor: pointer;
                color: ${theme.color.neutral.white};
                min-height: 44px;

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
};

export default Cta;
