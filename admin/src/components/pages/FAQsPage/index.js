"use client";

import { createFAQ, getFAQs } from "@/services/other";
import { useEffect, useState } from "react";
import Faq from "./Faq";
import styles from "./style.module.scss";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";

function FAQsPage() {
  const { isLoggedIn, user } = useUser();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshed, setRefreshed] = useState(0);
  const [create, setCreate] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const fetchFaqs = async () => {
    try {
      setLoading(true);
      const { data } = await getFAQs();
      setFaqs(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, [refreshed]);

  const handleRefresh = (e) => {
    if (e) e.preventDefault();
    setRefreshed(refreshed + 1);
    setFaqs([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createFAQ({
        question: newQuestion,
        answer: newAnswer,
      });
      setFaqs([...faqs, data]);
      setCreate(false);
      toast.success("FAQ created successfully");
    } catch (err) {
      toast.error("Failed to create FAQ");
    }
  };

  return (
    <>
      {isLoggedIn && user?.role === "admin" ? (
        <>
          {create &&
            createPortal(
              <div className={styles.modal}>
                <div className={styles.modal_content}>
                  <button
                    onClick={() => setCreate(false)}
                    className={styles.close}
                  >
                    X
                  </button>
                  <h2>Create FAQ</h2>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                      <label htmlFor="question">Question</label>
                      <textarea
                        type="text"
                        id="question"
                        value={newQuestion}
                        placeholder="Enter question here..."
                        onChange={(e) => setNewQuestion(e.target.value)}
                      ></textarea>
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="answer">Answer</label>
                      <textarea
                        id="answer"
                        rows={5}
                        value={newAnswer}
                        placeholder="Enter answer here..."
                        onChange={(e) => setNewAnswer(e.target.value)}
                      ></textarea>
                    </div>
                    <div className={styles.submit}>
                      <button
                        onClick={() => setCreate(false)}
                        className="btn-secondary"
                        style={{ "--primary": "red" }}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>,
              document.body
            )}
          <div className="wrapper">
            <div className={styles.header}>
              <h1>FAQs</h1>
              <div className={styles.action}>
                <button className={styles.refresh} onClick={handleRefresh}>
                  Refresh
                </button>
                <button
                  className={styles.create}
                  onClick={() => setCreate(true)}
                >
                  Create New
                </button>
              </div>
            </div>
            {!loading &&
              faqs.map((faq, index) => (
                <Faq key={index} faq={faq} refresh={handleRefresh} />
              ))}
            {loading && <p>Loading...</p>}
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default FAQsPage;
