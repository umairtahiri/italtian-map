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
      <div className="blogs-container">
        {blogPosts.map((article = {}, index) => {
          return (
            <div className="blog-post" key={index}>
              <img className="blog-image" src={article.img} />
              <div className="blog-content">
                <div className="title">{article.title}</div>
                <div className="publish">{article.publishDetails}</div>
                <div className="description">{article.descriptions}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
