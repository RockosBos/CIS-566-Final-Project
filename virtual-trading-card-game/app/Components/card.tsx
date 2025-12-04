import { useEffect, useState } from "react";
import Image from 'next/image';

import "./card.css"

export default function Card(props: any){

	const [cardRarity, setCardRarity] = useState('card');

	useEffect(() => {
		switch(props.rarity){
			case 'U':
				setCardRarity("GoldCard");
				break;
			case 'H':
				setCardRarity("SilverCard");
				break;
			case 'M':
				setCardRarity("BronzeCard");
				break;
			default:
				setCardRarity("card");
				break;				
		}

	}, [props.rarity])

	return(
		<>
			<div className={cardRarity}>
				{/* <p>{props.cardID}</p> */}
				<h1 className="CardName">{props.name}</h1>
				<Image src={`/Images/${props.name}.png`} alt='Image' width="200" height="200" /><br/>
				<div className="Stats">
					<p className="redProp">{props.red}</p>
					<p className="blueProp">{props.blue}</p>
					<p className="greenProp">{props.green}</p>
				</div>
				{/* <p>{props.rarity}</p> */}
				<div className="Effective">
					<p>Weakness: {props.weakness}</p>
					<p>Strength: {props.strength}</p>
				</div>
			</div>
		</>
	)
} 