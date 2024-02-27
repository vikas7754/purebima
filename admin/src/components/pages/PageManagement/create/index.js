"use client";
import styles from "./create.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { createPage } from "@/services/page";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function CreatePage() {
  const { user, isLoggedIn } = useUser();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showFaq, setShowFaq] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title,
        slug: title.toLowerCase().replace(/ /g, "-"),
        showFaq,
        showTestimonial,
        data: {
          content,
        },
      };
      setPublishing(true);
      console.log(payload);
      await createPage(payload);
      toast.success("Page created successfully");
      setPublishing(false);
      setTitle("");
      setContent("");
      setShowFaq(false);
      setShowTestimonial(false);
    } catch (err) {
      setPublishing(false);
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {isLoggedIn && user?.role === "admin" ? (
        <div className="wrapper">
          <div className={styles.container}>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.checkbox}>
              <div>
                <input
                  type="checkbox"
                  id="faq"
                  name="faq"
                  checked={showFaq}
                  onChange={(e) => setShowFaq(e.target.checked)}
                />
                <label htmlFor="faq">Show FAQ</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="testimonial"
                  name="testimonial"
                  checked={showTestimonial}
                  onChange={(e) => setShowTestimonial(e.target.checked)}
                />
                <label htmlFor="testimonial">Show Testimonial</label>
              </div>
            </div>
            <Editor onChange={setContent} value={content} />
            <div className={styles.submit}>
              <button className={"btn-primary"} onClick={handleSubmit}>
                {publishing ? (
                  <>
                    Publishing...
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : (
                  "Publish Page"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default CreatePage;
