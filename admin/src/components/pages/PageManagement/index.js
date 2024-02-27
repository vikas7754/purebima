"use client";

import { getAllPages } from "@/services/page";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function PageManagement() {
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
            <h1>Pages</h1>
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <a href={`/admin/pages/${page.id}`}>{page.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h1>Static Pages</h1>
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <a href={`/admin/pages/${page.id}`}>{page.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h1>Components</h1>
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <a href={`/admin/pages/${page.id}`}>{page.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageManagement;
