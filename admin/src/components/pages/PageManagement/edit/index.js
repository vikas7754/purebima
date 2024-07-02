"use client";
import { useEffect, useState } from "react";
import { updatePage } from "@/services/page";
import { toast } from "react-toastify";
import styles from "../create/create.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";
import dynamic from "next/dynamic";
import CodeEditor from "@/components/CodeEditor";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function EditPage({ data }) {
  const { user, isLoggedIn } = useUser();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showFaq, setShowFaq] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /<p[^>]*data-f-id="pbf"[^>]*>.*?<\/p>/gi;
    const updatedContent = content.replace(regex, "");
    try {
      const payload = {
        id: data._id,
        title,
        slug: title.toLowerCase().replace(/ /g, "-"),
        showFaq,
        showTestimonial,
        data: {
          content: updatedContent,
        },
      };
      setPublishing(true);
      console.log(payload);
      await updatePage(payload);
      toast.success("Page updated successfully");
      setPublishing(false);
    } catch (err) {
      setPublishing(false);
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (!data) return;
    setTitle(data.title);
    setContent(data.data.content);
    setShowFaq(data.showFaq);
    setShowTestimonial(data.showTestimonial);
  }, []);
  return (
    <>
      {isLoggedIn && user.role === "admin" ? (
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
            {data.type === "page" ? (
              <Editor onChange={setContent} value={content} />
            ) : (
              <CodeEditor code={content} onChange={setContent} />
            )}
            <div className={styles.submit}>
              <button className={"btn-primary"} onClick={handleSubmit}>
                {publishing ? (
                  <>
                    Updating...
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : (
                  "Update Page"
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

export default EditPage;
