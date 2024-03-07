"use client";

import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";
import useUser from "@/redux/hooks/useUser";
import { getUser } from "@/services/user";
import { getPage } from "@/services/page";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  const [content, setContent] = useState("");
  const fetchContent = async () => {
    const { data } = await getPage("navbar");
    setContent(data.data.content);
  };
  useEffect(() => {
    fetchContent();
  }, []);

  const { user, login } = useUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!user?.name) {
      getUser().then((res) => {
        if (res.data?.name) login(res.data);
      });
    }
  }, []);
  return (
    <nav
      className={`${styles.nav} ${scrolled && styles.scrolled}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></nav>
  );
}

export default Navbar;
