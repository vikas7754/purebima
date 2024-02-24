"use client";

import { useEffect, useState } from "react";
import styles from "./applications.module.scss";
import { getApplications } from "@/services/application";
import elapsedTime from "@/modules/elapsedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

function Applications() {
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
      setApplications(data.applications);
      setPage(page + 1);
      setLoading(false);
      setTotal(data.total);
      if (data.applications.length < data.total) setLoadMore(true);
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

  return (
    <div className={styles.container + " wrapper"}>
      <div className={styles.top}>
        <h1>Applications ({total})</h1>
        <div className={styles.actions}>
          <button onClick={handleRefresh} className="btn-primary">
            <FontAwesomeIcon icon={faSync} spin={loading} />
          </button>
        </div>
      </div>
      <div>
        {applications.length === 0 && !loading && <p>No applications found.</p>}
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
                <a href={`mailto:${application.email}`}>{application.email}</a>
              </div>
            )}
            {application.mobile && (
              <div>
                <strong>Mobile: </strong>
                <a href={`tel:${application.mobile}`}>{application.mobile}</a>
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
      {loadMore && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
}

export default Applications;
