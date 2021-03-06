const _ = require("lodash");
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fields: { slug: { ne: null } } }
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
            allContentfulPost{
              edges{
                node{
                  id
                  title
                  slug
                  excerpt{
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;
        const posts = result.data.allContentfulPost.edges;

        posts.forEach(({ node }) => {
          const slug = node.slug;
          const id = node.id;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              id
            }
          });
        });

        // and pages.
        const pages = items.filter(item => item.node.fields.source === "pages");

        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source
            }
          });
        });
      })
    );
  });
};