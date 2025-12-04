import React, {useEffect, useState} from "react";
import { getAllCards } from "../api/cards";
import { getUserDeck } from "../api/deck";
import Card from "./card";
import CardWithQuantity from "./CardWithQuantity";

export default function Deck(props:any) {

	const [deckRes, setDeckRes] = useState([]);
	const [cards, setCards] = useState([]);
	const [q, setQ]  = useState<string[]>([])
	let quantity: string[] = [];
	let firstRun = true;

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
			<p>Welcome to the deck page</p>
			<p>{cards.map((i: any) => 
				<>
					<Card cardID = {i.CardID} name = {i.Name} red = {i.RedStat} blue = {i.BlueStat} green = {i.GreenStat} rarity = {i.Rarity} weakness = {i.Weakness} strength = {i.Strength} />
					<h1>x{q[i.CardID]}</h1>
				</>
			)}
			</p>
		</div>
	</>
  );
}