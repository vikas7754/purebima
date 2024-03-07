import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/modal";
import { toast } from "react-toastify";
import { deletePage } from "@/services/page";
import Link from "next/link";
import styles from "../styles.module.scss";

function PagesTable({ pages }) {
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const handleDelete = async (e) => {
    try {
      await deletePage(showDeleteModal);
      setPages(pages.filter((page) => page.slug !== showDeleteModal));
      setShowDeleteModal(null);
      toast.success("Page deleted successfully");
    } catch (err) {
      toast.error("Failed to delete page");
    }
  };
  return (
    <>
      {showDeleteModal &&
        createPortal(
          <Modal close={() => setShowDeleteModal(null)}>
            <div>
              <h2 style={{ textAlign: "center" }}>
                Are you sure you want to delete this page?
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => setShowDeleteModal(null)}
                  className="btn-primary"
                >
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </Modal>,
          document.body
        )}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Last Updated On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page, i) => (
            <tr key={i}>
              <td data-label="SN">{i + 1}</td>
              <td data-label="Title">
                {page.type !== "component" ? (
                  <a
                    href={`${
                      new URL(page.slug, process.env.NEXT_PUBLIC_WEB_URL).href
                    }`}
                    target="_blank"
                  >
                    {page.title}
                  </a>
                ) : (
                  <span>{page.title}</span>
                )}
              </td>
              <td data-label="Last Updated On">
                {new Date(page.updatedAt).toDateString()}
              </td>
              <td data-label="Actions" className={styles.actions}>
                <a href={`/edit-page/${page.slug}`} className={styles.edit}>
                  Edit
                </a>
                {page.type === "page" && (
                  <button
                    className={styles.delete}
                    onClick={() => setShowDeleteModal(page.slug)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PagesTable;
