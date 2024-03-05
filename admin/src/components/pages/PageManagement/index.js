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
import PagesTable from "./PagesTable";

function PageManagement() {
  const { user, isLoggedIn } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [pages, setPages] = useState([]);
  const [staticPages, setStaticPages] = useState([]);
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {isLoggedIn && user.role === "admin" ? (
        <>
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
                    <PagesTable pages={pages} />
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <PagesTable pages={staticPages} />
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <PagesTable pages={components} />
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
