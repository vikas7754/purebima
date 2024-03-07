"use client";
import { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { getPage } from "@/services/page";
// import fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";

function Footer() {
  const [content, setContent] = useState("");
  const fetchFooter = async () => {
    const { data } = await getPage("footer");
    setContent(data.data.content);
  };
  useEffect(() => {
    fetchFooter();
  }, []);
  return (
    <footer
      className={styles.footer}
      dangerouslySetInnerHTML={{ __html: content }}
    ></footer>
  );
}

export default Footer;
