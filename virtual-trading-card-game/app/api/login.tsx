'use server'

import { NextResponse, NextRequest } from 'next/server'
import mysql from  'mysql2/promise';
import { GetDBSettings, IDBSettings } from '@/app/sharedCode/common'
let connectionParams = GetDBSettings();

export async function CreateUser(req: any){
	try{
		if(req.username && req.password){
			const connection = await mysql.createConnection(connectionParams);

			let get_exp_query = '';

			//get_exp_query = 'SELECT * FROM login';
			
			get_exp_query = `INSERT INTO login (username, password, userID) VALUES ('${req.username}' , '${req.password}', '${req.acctNum}')`;

			let values:any = [];

			const [results, fields] = await connection.execute(get_exp_query, values);

			connection.end();

			return JSON.parse(JSON.stringify(results));
		}
		return '';
	}
	catch(err: any){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}

export async function LoginUser(req: any) {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';

		//get_exp_query = 'SELECT * FROM login';
		
		get_exp_query = `SELECT userID FROM login WHERE Username = '${req.username}' AND Password = '${req.password}'`;

		let values: any = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		return JSON.parse(JSON.stringify(results));
	}
	catch(err: any){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}

export async function getNumberofUsers() {
	try{
		const connection = await mysql.createConnection(connectionParams);

		let get_exp_query = '';
		
		get_exp_query = `SELECT Username FROM login`;

		let values: any = [];

		const [results, fields] = await connection.execute(get_exp_query, values);

		connection.end();

		return JSON.parse(JSON.stringify(results));
	}
	catch(err: any){
		console.log("error: ", err.message);

		const response = {
			error: err.message,
			returnedStatus: 200
		}

		return NextResponse.json(response, {status: 200})
	}
}