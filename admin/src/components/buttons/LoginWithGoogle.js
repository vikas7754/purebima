"use client";
import styles from "./LoginWithGoogle.module.scss";
import Image from "next/image";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "@/services/user";
import { toast } from "react-toastify";
import useUser from "@/redux/hooks/useUser";

const LoginWithGoogleButton = () => {
  const { login } = useUser();
  const handleLogin = async (data) => {
    try {
      const res = await googleLogin({ accessToken: data.access_token });
      login(res.data);
      toast.success("Login Success");
    } catch (err) {
      toast.error(err?.response?.data?.message || err?.message);
    }
  };
  const handleGoogleLogin = useGoogleLogin({ onSuccess: handleLogin });
  return (
    <button onClick={() => handleGoogleLogin()}>
      <Image
        src={`/images/google.svg`}
        width={40}
        height={40}
        alt="Google icon"
      />
      <span>Continue With Google</span>
    </button>
  );
};

function LoginWithGoogle() {
  return (
    <div className={styles.withGoogle}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GCID}>
        <LoginWithGoogleButton />
      </GoogleOAuthProvider>
    </div>
  );
}

export default LoginWithGoogle;
