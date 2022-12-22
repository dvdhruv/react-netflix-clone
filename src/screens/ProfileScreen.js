import React from 'react'
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useHistory } from "react-router";

function ProfileScreen() {

    const user=useSelector(selectUser);
    const date = new Date();
	const history = useHistory();



    function getTime() {
		const today = new Date();

		const date =
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate();

		return date;
	}




    
    return (
        <div className="profileScreen">
           <Nav />
           <div className="profileScreen__body">
		   <h1>Edit Profile</h1>
               <div className="profileScreen__info">
               <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
               alt="Netflix__logo"  
               />
               <div className="profileScreen__details" >
                   <h1>{user.email}</h1>
                   <div className="profileScreen__plans" >
                       <h3>Plans (Current Plan: Premium)</h3>
							<p className='profileScreen__plans--date'>
								Renewal date: {getTime()}
							</p>

							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Standard <br />
									<span>1080p</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}>
									Subscribe
								</button>
							</div>
							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Basic <br />
									<span>480p</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}>
									Subscribe
								</button>
							</div>
							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Premium <br />
									<span>4k+HDR</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}
									className='profileScreen__plans--Premium'>
									Current Package
								</button>
							</div>

                       <button onClick={()=>auth.signOut()} 
                       className="profileScreen__signOut">Sign Out</button>
                   </div>
               </div>
               

               </div>
            </div>
        </div>
    )
}

export default ProfileScreen
