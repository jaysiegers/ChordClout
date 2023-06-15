import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { poster } from "../assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const checkEmail = (e) => {
    setEmail(e.target.value);
    const email_regex = /^[^\s@]+@gmail+\.[^\s@]+$/;
    if (!email_regex.test(e.target.value)) {
      setEmailError("Email address is not valid");
      setVerifyEmail(false);
    } else {
      setEmailError("");
      setVerifyEmail(true);
    }
  }

  const loginCheck = (email, password) => {
    if (email === "") {
      alert("Email address is not valid")
    } else if (!verifyEmail) {
      alert(emailError);
    } else {
      logInWithEmailAndPassword(email, password).then((err) => {
        if (err === "Firebase: Error (auth/missing-password)." || err === "Firebase: Error (auth/wrong-password).") {
          alert("Password do not match")
        } else if (err === "Firebase: Error (auth/user-not-found).") {
          alert("User does not exist.")
        } else {
          logInWithEmailAndPassword(email, password)
        }
      }) 
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center mx-[125px]">
        <img src={poster} alt="poster" className="absolute inset-y-0 left-0 w-auto h-full"/>
      <div className="flex flex-col text-center bg-white object-right px-[350px] py-[500px]">
        <input
          type="text"
          className="bg-slate-300 border border-slate-700 p-2 text-lg mb-2 rounded-lg"
          value={email}
          onChange={(e) => checkEmail(e)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="bg-slate-300 border border-slate-700 p-2 text-lg mb-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="p-2 text-lg mb-2 text-white bg-black rounded-lg"
          onClick={() => loginCheck(email, password)}
        >
          Login
        </button>
        <button className="p-2 text-lg mb-2 text-white bg-blue-500 rounded-lg" onClick={signInWithGoogle}>
          Login with Google
        </button>
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div>
          Don't have an account? <Link to="/register" className="text-black underline underline-offset-1">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;