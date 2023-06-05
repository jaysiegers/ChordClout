import { logout, auth } from '../firebase';
import { profile } from '../assets';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useState, useEffect, useRef } from 'react';

import '../assets/profile.css';

const Profile = () => {
const [user, loading, error] = useAuthState(auth);

const [open, setOpen] = useState(false);

let menuRef = useRef();

useEffect(() => {
  let handler = (e)=>{
    if(!menuRef.current.contains(e.target)){
      setOpen(false);
      console.log(menuRef.current);
    }      
  };

  document.addEventListener("mousedown", handler);
  

  return() =>{
    document.removeEventListener("mousedown", handler);
  }
});

  return (

  <div className="text-center">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' 
        onClick={()=>{setOpen(!open)}}>
          <img src={profile}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{user?.displayName}<br/><span>{user?.email}</span></h3>
          <ul>
            <DropdownItem text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
)
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <button onClick={() => logout()}>{props.text}</button>
    </li>
  );
}

export default Profile;