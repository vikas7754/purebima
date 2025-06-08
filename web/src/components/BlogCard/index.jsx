import React from "react";
import MediaSlider from "../MediaSlider";
import Link from "next/link";
import MotionDiv from "../MotionDiv";
import styles from "./BlogCard.module.scss";

const BlogCard = ({ data }) => {
  return (
    <MotionDiv className={styles.card}>
      <Link href={`/blogs/${data?.slug || data?._id}`} className="w-full block">
        <div className={styles.content}>
          <MediaSlider media={data?.media} />
          <h3 className={styles.title}>{data?.title}</h3>
          <p>{data.description}</p>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default BlogCard;
