import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { profile } from '../assets';

const Profile = () => {

  return (
    <button
    className="absolute inset-y-0 right-0 p-2 text-lg mb-2 text-white bg-gradient-to-br from-black to-[#a900b1] w-20 h-20 py-[500px]"
    // onClick={() => logInWithEmailAndPassword(email, password)}
    >
        <img src={profile} alt="profile" className="rounded-full object-cover border-2 shadow-xl shadow-black"/>
    Profile
  </button>
)
  }

export default Profile;