"use client";
import React from "react";
import BlogCard from "../BlogCard";
import styles from "./BlogsPage.module.scss";

const BlogsPage = ({ blogs, page, total }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs</h1>
      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
