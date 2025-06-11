import React, { useEffect, useState } from "react";
import styles from "../LoginSignup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useUser from "@/redux/hooks/useUser";
import { loginUser } from "@/services/user";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

function Login() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, login } = useUser();

  useEffect(() => {
    if (isLoggedIn) router.push(`/`);
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const { data } = await loginUser({ email, password });
      login(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.response?.data?.message || e.message);
      toast.error(e.response?.data?.message || e.message);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  return (
    <div className={styles.container}>
      {error && <div className="error">{error}</div>}
      <form action="" onSubmit={handleLogin}>
        <div className={styles.input}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChangeEmail}
          />
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </div>
        <div className={styles.input}>
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChangePassword}
          />
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faLock} />
          </i>
          <i
            className={styles.eye}
            onClick={() => setTogglePassword(!togglePassword)}
          >
            <FontAwesomeIcon icon={togglePassword ? faEye : faEyeSlash} />
          </i>
        </div>
        {/* <div className={styles.forgotPassword}>
          <a href="/forgotPassword">Forgot Password</a>
        </div> */}
        <div className={styles.submit}>
          <button type="submit">
            {loading ? "Please Wait" : "Submit for Login"}
            {loading && <FontAwesomeIcon icon={faSpinner} spin />}
          </button>
        </div>
      </form>
      {/* <div className={styles.or}>-------- OR --------</div>
      <LoginWithGoogle /> */}
    </div>
  );
}

export default Login;
