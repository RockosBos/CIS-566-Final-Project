import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser} from '../api/login'

import '../Components/button.css'
import '../Components/loginComponent.css'
import FailureComponent from "./FailureComponent";

export default function LoginComponent(props: any) {

		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');
		const [showFailure, setShowFailure] = useState(false);

		useEffect(() => {
			const getData = async () => {
				LoginUser({username: username, password: password}).then((res: any) => {
					if(res){
						setShowFailure(true);
						props.setUserId(res[0].userID);
						props.setShowLogin(false);
						props.setHomePage(true);
					}
					else{
						setShowFailure(true);
					}
				});
			};
	
			if(password){
				getData();
			}
		}, [password]);
	
		const onSubmit = async (e: any) => {
			e.preventDefault();
	
			const target = e.target;
			props.setUserName(target.username.value)
			setUsername(target.username.value);
			setPassword(target.password.value);
	
		}
	
		const createAccount = async (e: any) => {
			props.setShowSignup(true);
			props.setShowLogin(false);
		}	

	return(
		<>
			<form className='form' onSubmit={onSubmit}>
				<h1>Log In</h1><br/>
				{showFailure && <FailureComponent title={"Failed to Log in"} content={"Unable to log in, Incorrect username or password"} />}
				<label htmlFor="username">Username:</label>
				<input type='text' className='username' id='username' /><br />
				<label htmlFor="password">Password:</label>
				<input type='password' className='password' id='password' /><br />
				<label htmlFor='submit'> </label>
				<div className="buttons">
					<input className="button" type='submit' id='submit' value={"Log In"} />
					<button className="button" onClick={createAccount}>Create An Account</button>
				</div>
			</form>
		</>	);
}