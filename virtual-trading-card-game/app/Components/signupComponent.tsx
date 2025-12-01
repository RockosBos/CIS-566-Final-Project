import React, {useEffect, useState} from "react";
import {LoginUser, CreateUser, getNumberofUsers} from '../api/login'

export default function SignupComponent() {

		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');
		const [userAcctNum, setUserAcctNum] = useState(0);

		useEffect(() => {
			
			const getAcctNumber = async () => {
				getNumberofUsers().then((res:any) => {
					if(res.length){
						setUserAcctNum(res.length)
						CreateUser({username: username, password: password, acctNum: res.length}).then((res: any) => {
							if(res.length){
							}
							else{
			
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
	
		const cancel = async (e: any) => {
			
		}	

	return(
		<>
			<div className="signup">
				<form className='signupForm' onSubmit={onSubmit}>
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