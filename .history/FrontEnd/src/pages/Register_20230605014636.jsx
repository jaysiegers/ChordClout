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
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login", { replace: true });
  }, [user, loading]);
  return (
    <div className="h-screen w-screen flex items-center justify-center mx-[125px]">
      <img src={poster} alt="poster" className="absolute inset-y-0 left-0 w-auto h-full"/>
      <div className="flex flex-col text-center bg-gray-400 p-8">
        <input
          type="text"
          className="p-2 text-lg mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="p-2 text-lg mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="p-2 text-lg mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="p-2 text-lg mb-2 text-white bg-black" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login" className="text-white">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;