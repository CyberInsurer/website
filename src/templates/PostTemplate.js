import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Article from "../components/Article";
import Post from "../components/Post";
import { ThemeContext } from "../layouts";

const PostTemplate = props => {
  const {
    data
  } = props;

  // console.log(props.data.allContentfulPost.edges[0].node);
  
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Post
              post={props.data.allContentfulPost.edges[0].node}
              theme={theme}
            />
          </Article>
        )}
      </ThemeContext.Consumer>

    </React.Fragment>
  );
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
  allContentfulPost(filter:{slug: {eq: $slug}}){
    edges{
      node{
        title
        slug
        excerpt {
          excerpt
        }
        content {
          content
        }
        cover {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
}
`;