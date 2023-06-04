import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { logo } from '../assets';

const Profile = () => {

  return (
    <button
    className="p-2 text-lg mb-2 text-white bg-black rounded-lg"
    // onClick={() => logInWithEmailAndPassword(email, password)}
    >
        <img src={logo.replace('{w}','10').replace('{h}','10')} alt="logo" className="rounded-full
      object-cover border-2 shadow-xl shadow-black"/>
    Profile
  </button>
)
  }

export default Profile;