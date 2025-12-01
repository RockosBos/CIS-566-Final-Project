"use client"

import Image from "next/image";
import Form from 'next/form';
import Login from "./pages/login";
import Home from "./pages/home";
import Card from "./Components/card";
import { useEffect, useState } from "react";
import {getCard} from "../app/api/cards";
import { getUserDeck } from "./api/deck";

export default function page() {

	const [loginPage, setLoginPage] = useState(true);
	const [homePage, setHomePage] = useState(false);
	const [userID, setUserId] = useState("-1");
	const [cards, setCards] = useState([]);
	const [keyString, setKeyString] = useState("");
	const [startup, setStartup] = useState(true);

	let val = String();
	let whereString = String()

	useEffect(() => {

		const getUserCardData = async () => {
			getUserDeck(userID).then((res) => {
				res.forEach((e: any) => {
					whereString = "";
					Object.entries(e).map(([key, value]) => {
						console.log(key + " | " + value);
						if(value != "0"){
							val = key as string;
							val = val.toString();
							val = val.slice(-2);
							let valNum = parseInt(val, 10);
							whereString = whereString + valNum + `" OR CardID = "`
							
						}

					})
					whereString = whereString + `-1`;
					setKeyString(whereString);
				
				});

			})
		};
		if(!startup){
			getUserCardData();
		}
		
	}, [userID]);

		useEffect(() => {
		const getUserCard = async () => {
			getCard(keyString).then((res:any) => {
				setCards(res);
			});
		}
		if(!startup){
			getUserCard();
		}
		
		setStartup(false);
	}, [keyString])

  return (
    <div className="">
		<p>User ID: {userID}</p>
        {loginPage && <Login setUserId = {setUserId} />}
        {homePage && <Home />}
		{cards.map((i: any) => <Card cardID = {i.CardID} name = {i.Name} red = {i.RedStat} blue = {i.BlueStat} green = {i.GreenStat} rarity = {i.Rarity} weakness = {i.Weakness} strength = {i.Strength}/>)}
    </div>
  );
}
