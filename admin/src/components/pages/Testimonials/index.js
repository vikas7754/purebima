"use client";

import {
  createTestimonial,
  getTestimonials,
  uploadImage,
} from "@/services/other";
import { useState } from "react";
import { useEffect } from "react";
import Testimonial from "./Testimonial";
import styles from "./style.module.scss";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import Input from "@/components/Input";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";

function Testimonials() {
  const { isLoggedIn, user } = useUser();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshed, setRefreshed] = useState(0);
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");

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

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data } = await getTestimonials();
      setTestimonials(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [refreshed]);

  const handleRefresh = (e) => {
    if (e) e.preventDefault();
    setRefreshed(refreshed + 1);
    setTestimonials([]);
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
      const res = await createTestimonial(payload);
      setCreate(false);
      setTestimonials([...testimonials, res.data]);
      toast.success("Testimonial created successfully");
      setImage("");
      setName("");
      setDesignation("");
      setMessage("");
      setFile(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create testimonial");
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
                  <h2>Create Testimonial</h2>
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
          <div className="wrapper">
            <div className={styles.header}>
              <h1>Testimonials</h1>
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
            <div className={styles.testimonials}>
              {!loading &&
                testimonials.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    testimonial={testimonial}
                    refresh={handleRefresh}
                  />
                ))}
            </div>
            {loading && <p>Loading...</p>}
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Testimonials;
