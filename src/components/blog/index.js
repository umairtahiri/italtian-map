import React from "react";
import "./styles.scss";
import blogPosts from "./blog-data.js";

const Blog = () => {
  console.log(blogPosts);
  return (
    <div className="main-container">
      <div className="upper-container">
        <h1>News Notai.it</h1>
        <p>
          Useful information and insights on notaries and the main issues
          related to the notary profession.
        </p>
      </div>
      <div>
        {blogPosts.map((article = {}, index) => {
          return (
            <div className="article-list1" key={index}>
              {" "}
              <img className="img1" src={article.img} />
              {article.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
