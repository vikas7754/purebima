"use client";

import { useEffect, useState } from "react";
import styles from "./applications.module.scss";
import { getApplications } from "@/services/application";
import elapsedTime from "@/modules/elapsedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFileDownload,
  faSpinner,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";
import { exportApplications } from "@/services/other";
import { toast } from "react-toastify";

function Applications() {
  const { isLoggedIn, user } = useUser();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [total, setTotal] = useState(null);
  const [refreshed, setRefreshed] = useState(0);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data } = await getApplications(page);
      setApplications([...applications, ...data.applications]);
      setPage(page + 1);
      setLoading(false);
      setTotal(data.total);
      if (data.applications.length + applications.length < data.total)
        setLoadMore(true);
      else setLoadMore(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchApplications();
  }, [refreshed]);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    fetchApplications();
  };

  const handleRefresh = async (e) => {
    e.preventDefault();
    setPage(1);
    setApplications([]);
    setRefreshed(refreshed + 1);
  };

  const [exporting, setExporting] = useState(false);
  const handleExport = async (e) => {
    e.preventDefault();
    if (exporting) return;
    try {
      setExporting(true);
      const response = await exportApplications();
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = url;
      link.download = "applications.xlsx"; // Set the filename for the downloaded file
      document.body.appendChild(link);

      // Trigger the file download
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      toast.success("Applications data exported successfully");
      setExporting(false);
    } catch (err) {
      setExporting(false);
      console.error(err);
      toast.error("Failed to export applications");
    }
  };

  return (
    <>
      {isLoggedIn && user?.role === "admin" ? (
        <div className={styles.container + " wrapper"}>
          <div className={styles.top}>
            <h1>Applications ({total})</h1>
            <div className={styles.action}>
              <button onClick={handleRefresh} className={styles.refresh}>
                <FontAwesomeIcon icon={faSync} spin={loading} />
              </button>
              <button onClick={handleExport} className={styles.export}>
                <span>Export</span>
                <FontAwesomeIcon
                  icon={exporting ? faSpinner : faDownload}
                  spin={exporting}
                />
              </button>
            </div>
          </div>
          <div>
            {applications.length === 0 && !loading && (
              <p>No applications found.</p>
            )}
            {applications.map((application) => (
              <div key={application._id} className={styles.application}>
                <h3>
                  <strong>Application for: </strong>
                  {application.category}
                </h3>
                {application.firstName && (
                  <div>
                    <strong>First Name: </strong>
                    {application.firstName}
                  </div>
                )}
                {application.lastName && (
                  <div>
                    <strong>Last Name: </strong>
                    {application.lastName}
                  </div>
                )}
                {application.email && (
                  <div>
                    <strong>Email: </strong>
                    <a href={`mailto:${application.email}`}>
                      {application.email}
                    </a>
                  </div>
                )}
                {application.mobile && (
                  <div>
                    <strong>Mobile: </strong>
                    <a href={`tel:${application.mobile}`}>
                      {application.mobile}
                    </a>
                  </div>
                )}
                {application.subject && (
                  <div>
                    <strong>Subject: </strong>
                    {application.subject}
                  </div>
                )}
                {application.vehicleNumber && (
                  <div>
                    <strong>Vehicle Number: </strong>
                    {application.vehicleNumber}
                  </div>
                )}
                {application.dob && (
                  <div>
                    <strong>Date of Birth: </strong>
                    {application.dob}
                  </div>
                )}
                <div>
                  <strong>Submitted At: </strong>
                  {new Date(application.createdAt).toLocaleString()} (
                  {elapsedTime(application.createdAt)})
                </div>
              </div>
            ))}
          </div>
          {loading && <p>Loading...</p>}
          {loadMore && (
            <div className="load-more">
              <button onClick={handleLoadMore}>Load More</button>
            </div>
          )}
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Applications;
