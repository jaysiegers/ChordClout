<<<<<<< HEAD
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
=======
import React from 'react'
import {profile} from '../assets'

function Profile() {
  return (
    <div>Profile</div>
  )
}

export default Profile
>>>>>>> 4a96a647965d403853d697f09db8a9c798906f7f
