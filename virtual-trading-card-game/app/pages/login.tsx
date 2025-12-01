import Image from "next/image";
import Form from 'next/form';
import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser} from '../api/login'
import LoginComponent from "../Components/loginComponent";
import SignupComponent from "../Components/signupComponent";

const login = (props: any) => {

	const [showLogin, setShowLogin] = useState(true);
	const [showSignup, setShowSignup] = useState(false);

	return(
		<div className="">
			<main className="">
				{showSignup && <SignupComponent />}
				{showLogin && <LoginComponent setUserId={props.setUserId}/>}
			</main>
		</div>
	)
}

export default login;
