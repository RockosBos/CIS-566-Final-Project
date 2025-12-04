import Image from "next/image";
import Form from 'next/form';
import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser} from '../api/login'
import LoginComponent from "../Components/loginComponent";
import SignupComponent from "../Components/signupComponent";
import '../pages/login.css'

const login = (props: any) => {

	const [showLogin, setShowLogin] = useState(true);
	const [showSignup, setShowSignup] = useState(false);

	return(
		<div className="Login">
			{showSignup && <SignupComponent setUserId={props.setUserId} setShowSignup={setShowSignup} setShowLogin={setShowLogin} setUserName={props.setUserName} setHomePage={props.setHomePage} />}
			{showLogin && <LoginComponent setUserId={props.setUserId} setShowLogin={setShowLogin} setShowSignup={setShowSignup} setHomePage={props.setHomePage} setUserName={props.setUserName}/>}
		</div>
	)
}

export default login;
