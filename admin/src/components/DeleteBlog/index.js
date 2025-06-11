"use client";
import React from "react";
import styles from "./DeleteBlog.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteBlog } from "@/services/blog";
import { toast } from "react-toastify";

const DeleteBlog = ({ slug }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await deleteBlog(slug);
      toast.success(data?.message || "Blog deleted successfully");
      window.location.href = "/blogs";
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Are you sure want to delete it?</h2>
      <p className={styles.warningText}>
        This action cannot be undone. Please confirm.
      </p>
      {isLoading ? (
        <>
          <FontAwesomeIcon icon={faSpinner} spin />
          <span className={styles.deletingText}>Deleting...</span>
        </>
      ) : (
        <div className={styles.buttonGroup}>
          <button
            onClick={handleDelete}
            className={styles.deleteButton}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
          <button onClick={() => router.back()} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBlog;
