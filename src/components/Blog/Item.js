import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ fluid }]
        }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Img fluid={fluid} />
          </div>
          <p className="meta">
              {prefix}
          </p>
          <h1>
            {title}
          </h1>
          <p>{excerpt}</p>
          <p className="more"><strong>Read More &raquo;</strong></p>
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        
        li {
          margin: 0;
          padding: ${theme.space.inset.s};
          background: transparent;
          display: inline-block;
          width: 380px;
          vertical-align: top;
          white-space: normal;
        }

        h1 {
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;
          color: ${theme.color.brand.dark};
          padding: 0 ${theme.space.inset.s};
          margin-bottom: ${theme.space.inset.l};
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: ${theme.font.size.s};
          background: transparent;
          color: ${theme.color.neutral.gray.d};
          font-weight: bold;
          padding: ${theme.space.inset.s};
        }

        .more {
          color: ${theme.color.brand.dark};
          padding: ${theme.space.inset.s};
        }

        p {
          padding: 0 ${theme.space.inset.s};
          text-remove-gap: both;
          line-height: ${theme.font.lineHeight.l};
          font-size: ${theme.font.size.m};
        }

       
        @from-width desktop {
          li {
            margin: 0;
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
              }
            }
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h1 {
            font-size: 21px;
          }
          .meta {
            
          }
          p {
          }
          li {
            
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
