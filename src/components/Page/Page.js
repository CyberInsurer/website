import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title, featuredImage }
    },
    theme
  } = props;

  return (
    <React.Fragment>
      <div className="content">
        <header>
          <Headline title={title} featuredImage={featuredImage} theme={theme} />
        </header>
        <Bodytext html={html} theme={theme} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .content {
          background: white;
          padding: 40px;
          border-radius: 5px;
          border: 4px solid #DEE9ED;
        }
      `}</style>
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
