
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);

  const history=useHistory();

  const transitionNavBar=()=>{
    if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    };




  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);

    return () => window.removeEventListener("scroll",transitionNavBar);
  
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>

      <img
      onClick={()=>history.push("/")}

        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
      onClick={()=>history.push("/profile")}
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo" />
        </div>

      )
    }
    
    export default Nav