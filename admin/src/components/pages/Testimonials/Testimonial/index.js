import { useState } from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import Input from "@/components/Input";
import { toast } from "react-toastify";
import {
  deleteTestimonial,
  updateTestimonial,
  uploadImage,
} from "@/services/other";

function Testimonial({ testimonial, refresh }) {
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [name, setName] = useState(testimonial.name);
  const [designation, setDesignation] = useState(testimonial.designation);
  const [image, setImage] = useState(testimonial.image);
  const [message, setMessage] = useState(testimonial.message);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await uploadImage(formData);
      console.log(data);
      setImage(data.url);
      setUploading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        designation,
        image,
        message,
      };
      await updateTestimonial(testimonial._id, payload);
      refresh();
      setEdit(false);
      toast.success("Testimonial updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update testimonial");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteTestimonial(testimonial._id);
      refresh();
      setDeleteModal(false);
      toast.success("Testimonial deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete testimonial");
    }
  };
  return (
    <>
      {edit &&
        createPortal(
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <button onClick={() => setEdit(false)} className={styles.close}>
                X
              </button>
              <h2>Edit Testimonial</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                  <label htmlFor="image">Image</label>
                  {file ? (
                    <>
                      <img
                        src={URL.createObjectURL(file)}
                        alt="testimonial"
                        style={{ width: "50px", height: "50px" }}
                      />
                      {uploading ? (
                        <span> uploading...</span>
                      ) : (
                        <span> uploaded</span>
                      )}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="image"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  )}
                </div>
                <div className={styles.form_group}>
                  <Input
                    id={"name"}
                    type={"text"}
                    label={"Name"}
                    placeholder={"Name"}
                    value={name}
                    onChange={setName}
                  />
                </div>
                <div className={styles.form_group}>
                  <Input
                    id={"designation"}
                    type={"text"}
                    label={"Designation"}
                    placeholder={"Designation"}
                    value={designation}
                    onChange={setDesignation}
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className={styles.submit}>
                  <button
                    onClick={() => setEdit(false)}
                    className="btn-primary"
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
      {deleteModal && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <button
              onClick={() => setDeleteModal(false)}
              className={styles.close}
            >
              X
            </button>
            <h2>Are you sure you want to delete this Testimonial?</h2>
            <div className={styles.submit}>
              <button
                onClick={() => setDeleteModal(false)}
                className="btn-primary"
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
      <div className={styles.testimonial}>
        <p>{testimonial.message}</p>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              src={testimonial?.image || "/images/default.svg"}
              alt={testimonial.name}
            />
          </div>
          <div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.designation}</p>
          </div>
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

export default Testimonial;
