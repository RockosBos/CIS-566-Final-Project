import { useState } from "react";
import "./CardListing.css"

export default function CardListing(props:any) {

	let cards = [];
	const [borderColor, setBorderColor] = useState("lightgreen");

	const selectCard = () => {
		props.selectedCards.forEach((i:any) => {
			cards.push(i);
		})
		cards.push(props.cardID);
		props.setSelectedCards(cards);
		setBorderColor("blue");
		console.log(props.selectedCards);
	}

  return (
	<>
		<div className="cardListing" style={{border: `2px solid ${borderColor}`}}onClick={selectCard}>
			<p className="">{props.name}</p>
			<p className="redProp">{props.red}</p>
			<p className="blueProp">{props.blue}</p>
			<p className="greenProp">{props.green}</p>
		</div>
	</>
  );
}