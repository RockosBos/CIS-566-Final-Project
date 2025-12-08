import React, {useEffect, useState} from "react";
import { getAllCards } from "../api/cards";
import { getUserDeck } from "../api/deck";
import Card from "./card";
import "./Deck.css"

export default function Deck(props:any) {

	const [deckRes, setDeckRes] = useState([]);
	const [cards, setCards] = useState([]);
	const [q, setQ]  = useState<string[]>([]);
	let quantity: string[] = [];

	useEffect(() => {
		const getDeck = async () => {
			getUserDeck(props.userID).then((res:any) => {
				setDeckRes(res);
				Object.entries(res[0]).map((index) => {
					quantity.push(index[1] as string);
				});
				setQ(quantity);
				getAllCards().then((res:any) => {
					setCards(res);
				});
			});
		}

		if(props.userID != '-1'){
			getDeck();
		}
				
	}, [props.userID]);

  return (
	<>
		<div>
			<p className="deckTitle">Welcome to the deck page</p>
			<div className="container">
				<p>{cards.map((i: any) => 
					<div className="deckCard">
						{(q[i.CardID] != "0") && <Card cardID = {i.CardID} name = {i.Name} red = {i.RedStat} blue = {i.BlueStat} green = {i.GreenStat} rarity = {i.Rarity} weakness = {i.Weakness} strength = {i.Strength} type={i.Type}/>}
						{(q[i.CardID] != "0") &&<h1>x{q[i.CardID]}</h1>}
					</div>
				)}</p>
			</div>
		</div>
	</>
  );
}