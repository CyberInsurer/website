import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";

import AltHero from "../components/AltHero";
import AltStats from "../components/AltStats";
import AltLeader from "../components/AltLeader";
import Dashboard from "../components/Dashboard";
import Seo from "../components/Seo";

class Lander extends React.Component {
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
                        <AltHero scrollToContent={this.scrollToContent} theme={theme} />
                    )}
                </ThemeContext.Consumer>

                <ThemeContext.Consumer>
                    {theme => (
                        <AltStats scrollToContent={this.scrollToContent} theme={theme} />
                    )}
                </ThemeContext.Consumer>

                <ThemeContext.Consumer>
                  {theme => (
                    <Dashboard scrollToContent={this.scrollToContent} theme={theme} />
                  )}
                </ThemeContext.Consumer>

                <ThemeContext.Consumer>
                    {theme => (
                        <AltLeader scrollToContent={this.scrollToContent} theme={theme} />
                    )}
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

Lander.propTypes = {
    data: PropTypes.object.isRequired
};

export default Lander;

//eslint-disable-next-line no-undef
export const query = graphql`
  query LanderQuery {
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
