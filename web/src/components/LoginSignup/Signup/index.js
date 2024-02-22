import React, { useState, useEffect } from "react";
import styles from "../LoginSignup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faPhone,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "@/services/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useUser from "@/redux/hooks/useUser";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

function Signup() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, user, login } = useUser();
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const onChangeName = (e) => {
    setName(e.target.value);
    setError("");
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onChangeMobile = (e) => {
    setMobile(e.target.value);
    setError("");
  };

  useEffect(() => {
    if (isLoggedIn) router.push(`/`);
  }, [isLoggedIn]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email) return setError("Username is required");
    if (!password) return setError("Password is required");
    setLoading(true);
    const payload = {
      name,
      email,
      password,
      mobile,
    };
    try {
      const { data } = await registerUser(payload);
      login(data);
      setLoading(false);
      toast.success("Signup Success");
    } catch (e) {
      setLoading(false);
      setError(e.response?.data?.message || e.message);
      toast.error(e.response?.data?.message || e.message);
    }
  };

  return (
    <div className={styles.container}>
      {error && <div className="error">{error}</div>}
      <form action="" onSubmit={handleSignup}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={onChangeName}
          />
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
        <div className={styles.input}>
          <input
            type="email"
            name="userid"
            id="userid"
            placeholder="Your email"
            value={email}
            onChange={onChangeEmail}
          />
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </div>
        <div className={styles.input}>
          <input
            type="tel"
            placeholder="Your mobile number"
            value={mobile}
            onChange={onChangeMobile}
          />
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faPhone} />
          </i>
        </div>
        <div className={styles.input}>
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            value={password}
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
        <div className={styles.submit}>
          <button type="submit" disabled={loading}>
            {loading ? "Please Wait " : "Signup"}
            {loading && <FontAwesomeIcon icon={faSpinner} spin />}
          </button>
        </div>
      </form>
      <div className={styles.or}>-------- OR --------</div>
      <LoginWithGoogle />
    </div>
  );
}

export default Signup;
