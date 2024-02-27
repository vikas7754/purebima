import { useState } from "react";
import styles from "./faq.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { deleteFAQ, updateFAQ } from "@/services/other";
import Modal from "@/components/modal";

function Faq({ faq, refresh }) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [newQuestion, setNewQuestion] = useState(faq.question);
  const [newAnswer, setNewAnswer] = useState(faq.answer);
  const [newOrder, setNewOrder] = useState(faq.order || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      newQuestion === faq.question &&
      newAnswer === faq.answer &&
      newOrder === faq.order
    )
      return setEdit(false);
    if (!newQuestion || !newAnswer)
      return toast.error("Please fill all fields");
    try {
      await updateFAQ(faq._id, {
        question: newQuestion,
        answer: newAnswer,
        order: newOrder,
      });
      setEdit(false);
      toast.success("FAQ updated successfully");
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update FAQ");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteFAQ(faq._id);
      setDeleteModal(false);
      toast.success("FAQ deleted successfully");
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete FAQ");
    }
  };

  return (
    <>
      {edit &&
        createPortal(
          <Modal close={() => setEdit(false)}>
            <h2>Edit FAQ</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="order">Order</label>
                <input
                  type="number"
                  id="order"
                  value={newOrder}
                  placeholder="FAQ order no."
                  onChange={(e) => setNewOrder(e.target.value)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="question">Question</label>
                <textarea
                  type="text"
                  id="question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="answer">Answer</label>
                <textarea
                  id="answer"
                  rows={5}
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.submit}>
                <button
                  onClick={() => setEdit(false)}
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
          </Modal>,
          document.body
        )}
      {deleteModal && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <button
              onClick={() => setDeleteModal(false)}
              className={styles.close}
            >
              X
            </button>
            <h2>Are you sure you want to delete this FAQ?</h2>
            <p style={{ padding: "20px 0" }}>{faq.question}</p>
            <div className={styles.submit}>
              <button
                onClick={() => setDeleteModal(false)}
                className="btn-secondary"
                style={{ "--primary": "red" }}
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.faq} onClick={() => setShow(!show)}>
          <h2>{faq.question}</h2>
          {show && <p>{faq.answer}</p>}
        </div>
        <div className={styles.action}>
          <button
            className={styles.delete}
            onClick={() => setDeleteModal(true)}
          >
            <span>Delete</span>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className={styles.edit} onClick={() => setEdit(true)}>
            <span>Edit</span>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Faq;
