"use client";

import { getUsers } from "@/services/user";
import { useEffect, useState } from "react";
import styles from "./users.module.scss";
import elapsedTime from "@/modules/elapsedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

function Users() {
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
      setUsers(data.users);
      setPage(page + 1);
      setLoading(false);
      setTotal(data.total);
      if (data.users.length < data.total) setLoadMore(true);
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

  return (
    <div className={styles.container + " wrapper"}>
      <div className={styles.top}>
        <h1>Users ({total})</h1>
        <div className={styles.actions}>
          <button onClick={handleRefresh} className="btn-primary">
            <FontAwesomeIcon icon={faSync} spin={loading} />
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
              Registered on: {new Date(user.createdAt).toLocaleDateString()} (
              {elapsedTime(user.createdAt)})
            </p>
          </div>
        ))}
        {loadMore && (
          <div className={styles.loadMore}>
            <button onClick={handleLoadMore} className="btn-primary">
              Load More
            </button>
          </div>
        )}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default Users;
