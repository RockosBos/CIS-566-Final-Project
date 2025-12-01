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
			setUsername(target.username.value);
			setPassword(target.password.value);
	
		}
	
		const cancel = async (e: any) => {
			
		}	

	return(
		<>
			<div className="login">
				<form className='loginnForm' onSubmit={onSubmit}>
					<label htmlFor="username">Username:</label>
					<input type='text' className='username' id='username' />
					<label htmlFor="password">Password:</label>
					<input type='password' className='password' id='password' />
					<label htmlFor='submit'> </label>
					<input type='submit' id='submit'></input>
					<button onClick={cancel}>Cancel</button>
				</form>
			</div>
		</>
	);
}