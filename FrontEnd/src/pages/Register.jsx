import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { poster } from "../assets";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showError, setShowError] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [showName, setShowName] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (name === "") {
      setNameError("Please enter name");
      setShowName(true);
      setShowError(false);
      setShowPass(false);
    } else if (!verifyEmail || email === "") {
      setShowName(false);
      setEmailError("Email address is not valid");
      setShowError(true);
      setShowPass(false);
    } else {
      registerWithEmailAndPassword(name, email, password).then((err) => {
        console.log(err)
        if (err === "Firebase: Error (auth/email-already-in-use).") {
          setEmailError("Email already exist");
          setShowError(true);
          setShowName(false);
          setShowPass(false);
        } else if (err === "Firebase: Error (auth/missing-password).") {
          setPasswordError("Password is missing");
          setShowError(false);
          setShowName(false);
          setShowPass(true);
        } else if (err === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
          setPasswordError("Password should be longer than 6 characters");
          setShowError(false);
          setShowName(false);
          setShowPass(true);
        } else {
          registerWithEmailAndPassword(name, email, password);
        }
      })
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login", { replace: true });
  }, [user, loading]);

  const checkEmail = (e) => {
    setEmail(e.target.value);
    const email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email_regex.test(e.target.value)) {
      setEmailError("Email address is not valid");
      setVerifyEmail(false);
    } else {
      setEmailError("");
      setVerifyEmail(true);
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center mx-[125px]">
      <img src={poster} alt="poster" className="absolute inset-y-0 left-0 w-auto h-full"/>
      <div className="flex flex-col text-center bg-white object-right px-[350px] py-[300px]">
        <input
          type="text"
          className="bg-slate-300 border border-slate-700 p-2 text-lg mb-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
        {showName && <p className="error">{nameError}</p>}
        {showError && <p className="error">{emailError}</p>}
        {showPass && <p className="error">{passwordError}</p>}
        <button className="p-2 text-lg mb-2 text-white bg-black rounded-lg" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login" className="text-black underline underline-offset-1">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;