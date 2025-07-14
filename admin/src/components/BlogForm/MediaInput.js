"use client";
import { uploadFile } from "@/services/blog";
import { faSpinner, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const MediaInput = ({ media, setFormdata, uploading, setUploading, index }) => {
  const handleMediaChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading((prev) => {
      const newUploading = [...prev];
      newUploading[index] = true;
      return newUploading;
    });

    try {
      const formData = new FormData();
      formData.append("file", file);
      const {
        data: { url },
      } = await uploadFile(formData);
      if (!url) {
        throw new Error("Failed to upload media");
      }

      const type = file.type.startsWith("image/") ? "image" : "video";
      setFormdata((prev) => {
        const newMedia = [...prev.media];
        newMedia[index] = { url, type };
        return { ...prev, media: newMedia };
      });
    } catch (error) {
      console.error("Error uploading media:", error);
      toast.error(error?.response?.data?.message || "Failed to upload media");
    } finally {
      setUploading((prev) => {
        const newUploading = [...prev];
        newUploading[index] = false;
        return newUploading;
      });
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => handleMediaChange(e)}
        disabled={uploading[index]}
        id={`media-${index}`}
        style={{ display: "none" }}
      />
      <label htmlFor={`media-${index}`}>
        {media[index] && (
          <div>
            {media[index].type === "image" ? (
              <img src={media[index].url} alt="Preview" />
            ) : (
              <video controls>
                <source src={media[index].url} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        {!media[index] && (
          <span>
            {uploading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <FontAwesomeIcon icon={faUpload} />
            )}
          </span>
        )}
      </label>
    </div>
  );
};

export default MediaInput;
