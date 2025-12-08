import { useEffect, useState } from "react";
import { getUserDeck } from "../api/deck";
import { getAllCards } from "../api/cards";
import CardListing from "./CardListing";
import "./GameSelectCards.css"

export default function GameSelectCards(props:any) {

	const [cards, setCards] = useState([]);
	const [deck, setDeck] = useState([]);
	let quantity: string[] = [];
	const [q, setQ]  = useState<string[]>([]);

	useEffect(() => {
		const getDeck = async () => {
			getUserDeck(props.userID).then((res:any) => {
				setDeck(res);

				Object.entries(res[0]).map((index) => {
					quantity.push(index[1] as string);
				});
				setQ(quantity);
				getAllCards().then((res:any) => {
					setCards(res);
					props.setSelectedCards(cards);
				});
			});
		}

		if(props.userID != '-1'){
			getDeck();
		}
	}, [props.userID]);

  return (
	<div className="GScontainer">
		<p>{cards.map((i: any) => 
			<div className="GSdeckCard">
				{(q[i.CardID] != "0") && <><CardListing cardID = {i.CardID} name = {i.Name} red = {i.RedStat} blue = {i.BlueStat} green = {i.GreenStat} setSelectedCards={props.setSelectedCards} selectedCards={props.selectedCards}/><br/></>}
			</div>
		)}</p>
	</div>

  );
}