"use client";

import { deletePage, getAllPages } from "@/services/page";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { createPortal } from "react-dom";
import Modal from "@/components/modal";
import { toast } from "react-toastify";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";

function PageManagement() {
  const { user, isLoggedIn } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [pages, setPages] = useState([]);
  const [staticPages, setStaticPages] = useState([]);
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const fetchPages = async () => {
    try {
      const { data } = await getAllPages();
      setPages(data.pages || []);
      setStaticPages(data.staticPages || []);
      setComponents(data.components || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

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
      {isLoggedIn && user.role === "admin" ? (
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
          <div className={styles.container + " wrapper"}>
            <div className={styles.tabs}>
              <button
                onClick={() => setActiveTab(0)}
                className={activeTab === 0 ? styles.active : ""}
              >
                Pages
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={activeTab === 1 ? styles.active : ""}
              >
                Static Pages
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={activeTab === 2 ? styles.active : ""}
              >
                Components
              </button>
            </div>
            <div className={styles.pages}>
              {activeTab === 0 && (
                <div>
                  <div className={styles.header}>
                    <div>
                      <Link href="/create-page" className="btn-primary">
                        Create New Page
                      </Link>
                    </div>
                  </div>
                  <div>
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
                              <a
                                href={`${
                                  new URL(
                                    page.slug,
                                    process.env.NEXT_PUBLIC_WEB_URL
                                  ).href
                                }`}
                                target="_blank"
                              >
                                {page.title}
                              </a>
                            </td>
                            <td data-label="Last Updated On">
                              {new Date(page.updatedAt).toDateString()}
                            </td>
                            <td data-label="Actions" className={styles.actions}>
                              <Link
                                href={`/edit-page/${page.slug}`}
                                className={styles.edit}
                              >
                                Edit
                              </Link>
                              <button
                                className={styles.delete}
                                onClick={() => setShowDeleteModal(page.slug)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <ul>
                    {staticPages.map((page) => (
                      <li key={page.id}>
                        <a href={`/admin/pages/${page.id}`}>{page.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <ul>
                    {components.map((page) => (
                      <li key={page.id}>
                        <a href={`/admin/pages/${page.id}`}>{page.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default PageManagement;
