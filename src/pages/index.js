import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";

import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Pitch from "../components/Pitch";
import Leader from "../components/Leader";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'event': 'getQuote' })
    location.href = "https://my.cyberinsurer.uk/quote"
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
          {theme => (
            <Pitch scrollToContent={this.scrollToContent} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
          {theme => (
            <Stats scrollToContent={this.scrollToContent} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
          {theme => (
            <Leader scrollToContent={this.scrollToContent} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allContentfulPost(sort: {fields: createdAt, order: DESC}) {
    edges{
      node{
        title
        slug
        excerpt{
          excerpt
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

//hero-background
