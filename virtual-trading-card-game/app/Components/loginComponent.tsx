import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser} from '../api/login'

export default function LoginComponent(props: any) {

		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');

		useEffect(() => {
			const getData = async () => {
				LoginUser({username: username, password: password}).then((res: any) => {
					if(res.length){
						props.setUserId(res[0].userID);
						props.setShowLogin(false);
						props.setHomePage(true);
					}
					else{
	
					}
				});
			};
	
			getData();
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
			<div className="login">
				<form className='loginForm' onSubmit={onSubmit}>
					<label htmlFor="username">Username:</label>
					<input type='text' className='username' id='username' />
					<label htmlFor="password">Password:</label>
					<input type='password' className='password' id='password' />
					<label htmlFor='submit'> </label>
					<input type='submit' id='submit'></input>
					<button onClick={createAccount}>Create An Account</button>

				</form>
			</div>
		</>
	);
}