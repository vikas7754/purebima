"use client";

import { getUsers } from "@/services/user";
import { useEffect, useState } from "react";
import styles from "./users.module.scss";
import elapsedTime from "@/modules/elapsedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSpinner,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import useUser from "@/redux/hooks/useUser";
import LoginPage from "@/components/LoginSignup";
import { exportUsers } from "@/services/other";
import { toast } from "react-toastify";

function Users() {
  const { isLoggedIn, user } = useUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [total, setTotal] = useState(null);
  const [refreshed, setRefreshed] = useState(0);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await getUsers(page);
      setUsers([...users, ...data.users]);
      setPage(page + 1);
      setLoading(false);
      setTotal(data.total);
      if (data.users.length + users.length < data.total) setLoadMore(true);
      else setLoadMore(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [refreshed]);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleRefresh = async (e) => {
    e.preventDefault();
    setPage(1);
    setUsers([]);
    setRefreshed(refreshed + 1);
  };

  const [exporting, setExporting] = useState(false);
  const handleExport = async (e) => {
    e.preventDefault();
    if (exporting) return;
    try {
      setExporting(true);
      const response = await exportUsers();
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the file download
      const link = document.createElement("a");
      link.href = url;
      link.download = "users.xlsx"; // Set the filename for the downloaded file
      document.body.appendChild(link);

      // Trigger the file download
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      toast.success("Users data exported successfully");
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
            <h1>Users ({total})</h1>
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
            {users.length === 0 && !loading && <p>No users found.</p>}
            {users.map((user) => (
              <div key={user._id} className={styles.user}>
                <h4>
                  <strong>Name: </strong> {user.name}
                </h4>
                <p>
                  <strong>Email: </strong>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                {user.phone && (
                  <p>
                    <strong>Phone: </strong>
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                  </p>
                )}
                <p>
                  Registered on: {new Date(user.createdAt).toLocaleDateString()}{" "}
                  ({elapsedTime(user.createdAt)})
                </p>
              </div>
            ))}
            {loadMore && (
              <div className="load-more">
                <button onClick={handleLoadMore}>Load More</button>
              </div>
            )}
          </div>
          {loading && <p>Loading...</p>}
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Users;
