"use client";
import React from "react";
import MediaSlider from "../MediaSlider";
import styles from "./style.module.scss";

const BlogDetailsPage = ({ blog }) => {
  return (
    <div className={styles.container}>
      <MediaSlider media={blog.media} />
      <div className={styles.content}>
        <h1>{blog.title}</h1>
        <p className="text-gray-500">{blog.description}</p>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          suppressHydrationWarning
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
