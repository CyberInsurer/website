import React from "react";
import PropTypes from "prop-types";

const Headline = props => {
  const { title, featuredImage, children, theme } = props;

  return (
    <React.Fragment>
      {featuredImage &&
        <div style={{ backgroundImage: "url(" + featuredImage.childImageSharp.fluid.src + ")" }} className="window" />
      }

      {title ? <h1>{title}</h1> : <h1>{children}</h1>}

      {/* --- STYLES --- */}
      <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};
          color: ${theme.color.brand.dark};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        .window {
          max-height: 300px;
          background-size: cover;
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  featuredImage: PropTypes.object,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
