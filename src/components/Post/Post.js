import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Cta from "../Cta"

const Post = props => {
  const {
    theme
  } = props;

  console.log(props.post);

  return (
    <React.Fragment>
      <div style={{ backgroundImage: "url(" + props.post.cover.file.url + '?w=1200' + ")"}} className="window" />
      <header className="postHeader">
        <Headline title={props.post.title} theme={theme} />
      </header>
      <Bodytext html={props.post.content.content} theme={theme} />
      <footer>
        <Cta theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Post;
