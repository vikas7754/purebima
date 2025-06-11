"use client";
import React, { useEffect, useState } from "react";
import styles from "./BlogForm.module.scss";
import { toast } from "react-toastify";
import { createBlog, updateBlog } from "@/services/blog";
import MediaInput from "./MediaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const BlogForm = ({ data, action = "create" }) => {
  const [publishing, setPublishing] = useState(false);
  const [uploading, setUploading] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    content: "",
    categories: [],
    media: [],
  });

  useEffect(() => {
    if (action === "update" && data) {
      setFormdata({
        title: data.title || "",
        description: data.description || "",
        content: data.content || "",
        categories: data.categories || [],
        media: data.media || [],
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (publishing) return; // Prevent multiple submissions
    if (
      !formdata.title ||
      !formdata.description ||
      !formdata.content ||
      formdata.categories.length === 0
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (formdata.media.length === 0) {
      toast.error("Please upload at least one media file");
      return;
    }
    if (uploading.some((upload) => upload)) {
      toast.error("Please wait for all media uploads to finish");
      return;
    }

    setPublishing(true);
    try {
      if (action === "create") {
        await createBlog(formdata);
        toast.success("Blog created successfully");
        setFormdata({
          title: "",
          description: "",
          content: "",
          categories: [],
          media: [],
        });
      } else {
        // Assuming updateBlog is a function to update the blog
        await updateBlog(formdata, data._id);
        toast.success("Blog updated successfully");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formdata.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="description"
          placeholder="Description"
          value={formdata.description}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <Editor
        onChange={(v) => setFormdata((prev) => ({ ...prev, content: v }))}
        value={formdata.content}
      />
      <div>
        <input
          type="text"
          name="categories"
          placeholder="Categories (comma separated)"
          value={formdata.categories.join(",")}
          onChange={(e) =>
            setFormdata((prev) => ({
              ...prev,
              categories: e.target.value.split(",").map((cat) => cat.trim()),
            }))
          }
        />
      </div>
      <div>
        <label className={styles.mediaLabel}>Upload Media</label>
        <div className={styles.mediaInput}>
          {new Array(5).fill(0).map((_, index) => (
            <MediaInput
              key={index}
              index={index}
              setFormdata={setFormdata}
              media={formdata.media}
              setUploading={setUploading}
              uploading={uploading[index]}
            />
          ))}
        </div>
      </div>
      <div className={styles.submit}>
        <button className={"btn-primary"} onClick={handleSubmit}>
          {publishing ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin />
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
