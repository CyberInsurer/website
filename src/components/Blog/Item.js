import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    theme,
    post: {
      title,
      slug,
      excerpt: {
        excerpt
      },
      cover: {
        file: {
          url
        }
      }
    }
  } = props;

  const imgStyle = {
    maxWidth: '100%',
    height: '240px',
    width: '100%',
  };

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            { url && 
              <img src={url + '?w=380'} alt={title} style={imgStyle} />
            }
          </div>
          <p className="meta">
              
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
          display: block;
          vertical-align: top;
          white-space: normal;
        }

        h1 {
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;
          color: ${theme.color.brand.dark};
          padding: 0 ${theme.space.inset.s};
          margin-bottom: ${theme.space.inset.m};
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
            padding: 0;
            background: transparent;
            display: inline-block;
            width: 380px;
            vertical-align: top;
            white-space: normal;
          }

            &::after {
              bottom: ${`calc(${theme.space.default} * -1.5)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -2.75)`};
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
