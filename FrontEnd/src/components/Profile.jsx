import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { logout, auth } from '../firebase';
import { profile } from '../assets';
import { useAuthState } from 'react-firebase-hooks/auth';

// user.displayName
const Profile = () => {
const [user, loading, error] = useAuthState(auth);

  return (
    <button
    className="absolute inset-y-0 right-0 p-2 text-lg mb-2 text-white bg-gradient-to-br from-black to-[#a900b1] w-20 h-20 py-[500px]"
    onClick={() => logout()}
    >
        <img src={profile} alt="profile" className="rounded-full object-cover border-2 shadow-xl shadow-black"/>
        {user?.displayName}
  </button>
)
  }

export default Profile;