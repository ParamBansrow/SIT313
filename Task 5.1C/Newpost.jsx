import React from "react";

function Newpost({ postType, setPostType }) {
  return (
    <div className="newpost">
      <div className="heading">New Post</div>
        <div className="postType">
        <h3 className="label">Select Post Type: </h3>
        <label id="q">
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={(e) => setPostType(e.target.value)}
          />
          Question
        </label>
        <label id="a">
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={(e) => setPostType(e.target.value)}
          />
          Article
        </label>
      </div>
    </div>
  );
}


export default Newpost;
