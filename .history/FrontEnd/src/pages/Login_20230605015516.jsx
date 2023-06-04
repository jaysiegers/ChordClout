import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { poster } from "../assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="h-screen w-screen flex items-center justify-center mx-[125px]">
        <img src={poster} alt="poster" className="absolute inset-y-0 left-0 w-auto h-full"/>
      <div className="flex flex-col text-center bg-white object-right px-[315px] py-[300px]">
        <input
          type="text"
          className="border-4 border-slate-800 bg-slate-300 p-2 text-lg mb-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="bg-slate-300 p-2 text-lg mb-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="p-2 text-lg mb-2 text-white bg-black rounded-lg"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="p-2 text-lg mb-2 text-white bg-blue-500 rounded-lg" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register" className="text-black">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;