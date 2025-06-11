import React from "react";
import MediaSlider from "../MediaSlider";
import Link from "next/link";
import styles from "./BlogCard.module.scss";

const BlogCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.content}>
          <MediaSlider media={data?.media} />
          <h3 className={styles.title}>{data?.title}</h3>
          <p>{data.description}</p>
          <div className={styles.actions}>
            <Link
              href={`/blogs/delete/${data?._id}`}
              className={styles.readMore}
            >
              Delete
            </Link>
            <Link
              href={`/blogs/update/${data?._id}`}
              className={styles.readMore}
            >
              Update
            </Link>
            <Link href={`/blogs/${data?._id}`} className={styles.readMore}>
              Read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
