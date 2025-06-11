"use client";
import React from "react";
import BlogCard from "../BlogCard";
import styles from "./BlogsPage.module.scss";
import Link from "next/link";

const BlogsPage = ({ blogs, page, total, limit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs</h1>
        <Link href="/blogs/create" className={styles.createButton}>
          Create New Blog
        </Link>
      </div>
      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
