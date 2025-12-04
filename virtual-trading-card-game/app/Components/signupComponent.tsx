import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser, getNumberofUsers} from '../api/login'
import { createNewDeck } from "../api/deck";

import "../Components/button.css"
import '../Components/loginComponent.css'
import FailureComponent from "./FailureComponent";

export default function SignupComponent(props: any) {

		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');
		const [userAcctNum, setUserAcctNum] = useState(0);
		const [showFailure, setShowFailure] = useState(false);

		useEffect(() => {
			
			const getAcctNumber = async () => {
				getNumberofUsers().then((res:any) => {
					if(password){
						let deckID = res.length;
						setUserAcctNum(res.length)
						CreateUser({username: username, password: password, acctNum: res.length}).then((res: any) => {
							if(res){
								props.setShowSignup(false);
								props.setShowLogin(true);
								createNewDeck(deckID).then((res:any) => {
									props.setUserId(deckID);
									props.setUserName(username);
									props.setShowLogin(false);
									props.setHomePage(true);
								});
								setShowFailure(false);
							}
							else{
								setShowFailure(true);
							}
						});
					}
				})
			}

			getAcctNumber();
		}, [password]);
	
		const onSubmit = async (e: any) => {
			e.preventDefault();
	
			const target = e.target;
			setUsername(target.username.value);
			setPassword(target.password.value);
	
		}
	
		const setLogin = async (e: any) => {
			props.setShowSignup(false);
			props.setShowLogin(true);
		}	

	return(
		<form className='form' onSubmit={onSubmit}>
			<h1>Sign Up</h1><br/>
			{showFailure && <FailureComponent title={"Failed to Create an Account"} content={"Unable to create an account, please try again"} />}
			<label htmlFor="username">Username:</label>
			<input type='text' className='username' id='username' /><br/>
			<label htmlFor="password">Password:</label>
			<input type='password' className='password' id='password' /><br />
			<label htmlFor='submit'> </label><br />
			<div className="buttons">
				<input type='submit' id='submit' className="button" value={"Create Account"}/>
				<button className="button" onClick={setLogin}>Return to Login</button>
			</div>
		</form>
		
	);
}