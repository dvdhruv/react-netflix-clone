import React, { useRef } from 'react'
import './SignUpScreen.css';
import {auth,provider} from "../firebase";
// import emailjs from "emailjs-com";

function SignUpScreen() {

    const emailRef=useRef(null);

    const passwordRef=useRef(null);



    
    // function sendEmail(e){
    //     e.preventDefault();

    //     emailjs.sendForm('service_b9u9dmh', 'template_6afo7jn', e.target, 'user_C08wWf3xmemY6DCnYFNda')
    //       .then((result) => {
    //           console.log(result.text);
    //       }).catch (error => {
    //           console.log(error.text);
    //       });
    //     //   e.target.reset();
    // }


    const register=(e)=>{
        e.preventDefault();
        // sendEmail();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((registeredUser)=>{
            // console.log(registeredUser);
        }).catch(error =>{
            alert(error.message);
        });
    };






    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            
				emailRef.current.value,
				passwordRef.current.value,
			)
			.then((signInedUser) => {
				// signIn successful.
				console.log(signInedUser);
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				// const errorMessage = error.message;
				alert(error.Message);
			});
};



const signInWithGoogle = () => {
    auth
        .signInWithPopup(provider)
        .then((signInedUser) => {
            // signIn successful.
            // console.log(signInedUser);
        })
        .catch((error) => {
            // An error happened.
            // console.log(error);
        });
};



    return (
        <div className="signUpScreen">
            <form >
                <h1>Sign In</h1>
                <input 
                ref={emailRef} 
                name="email"
                placeholder="Email or phone number" 
                type="email" 
                required/>


                <input 
                required
               
                ref={passwordRef} 
                placeholder="password" 
                type="password" 
                />
                
                
                <button 
                type="submit" 
                onClick={signIn}>
                Sign In
                </button>
                <h4>
                    <span className="signUpScreen__gray">New to Netflix?  </span>
                    <span className="signUpScreen__link" onClick={register}> Sign up now.</span>
                </h4>
            </form>

            <div className='signupScreen_withGoogle'>
					<img
						onClick={signInWithGoogle}
						src="https://github.com/saddamarbaa/netflix-clone-react/blob/main/src/images/google.png?raw=true"
						alt='Logo'
					/>
					<h5 onClick={signInWithGoogle}>Login With Google</h5>
				</div>


        </div>
    )
}

export default SignUpScreen
