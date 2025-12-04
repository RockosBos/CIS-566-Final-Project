import { useState } from "react";
import { getAllCards } from "../api/cards";
import Card from "./card";
import { addCardToDeck } from "../api/deck";
import "./Draw.css"

export default function Draw(props:any) {

	const [pulledCards, setPulledCards] : any = useState([]);
	
	const DrawCards = async () => {
		let Cards: any[] = [];
		let cardRarities = [];

		let rarity = "";
		let i = 0;
		while(i < 5){
			let rand = 0 + Math.random() * (99);
			if(rand < 0.05){
				rarity = "U";
			}
			else if(rand < 1){
				rarity = "H";
			}
			else if(rand < 20){
				rarity = "M";
			}
			else{
				rarity = "L";
			}
			cardRarities.push(rarity);
			i++;
		}

		getAllCards().then((res) => {
			let i = 0;
			let ultraRarityCards: any[] = [];
			let highRarityCards: any[] = [];
			let medRarityCards: any[] = [];
			let lowRarityCards: any[] = [];

			res.forEach((e : any) => {
				switch(e.Rarity){
					case 'U':
						ultraRarityCards.push(e);
						break;
					case 'H':
						highRarityCards.push(e);
						break;

					case 'M':
						medRarityCards.push(e);
						break;

					case 'L':
						lowRarityCards.push(e);
						break;
				}
			});

			while(i < 5){
				let currentRarity = cardRarities[i];
				let rand;
				switch(currentRarity){
					case 'U':
						rand = 0 + Math.random() * (ultraRarityCards.length);
						rand = Math.floor(rand);
						Cards.push(ultraRarityCards[rand]);
						break;
					case 'H':
						rand = 0 + Math.random() * (highRarityCards.length);
						rand = Math.floor(rand);
						Cards.push(highRarityCards[rand]);
						break;

					case 'M':
						rand = 0 + Math.random() * (medRarityCards.length);
						rand = Math.floor(rand);
						Cards.push(medRarityCards[rand]);
						break;

					case 'L':
						rand = 0 + Math.random() * (lowRarityCards.length);
						rand = Math.floor(rand);
						Cards.push(lowRarityCards[rand]);
						break;
				}
				i++;
			}
			setPulledCards(Cards);
			Cards.forEach((e : any) => {
				addCardToDeck(e.CardID, props.userID).then((res) => {
					console.log(res);
				});
			});
		});

	}

  return (
	<>
		<div>
			<p>Welcome to the draw page</p>
			<button onClick={DrawCards}>Draw</button>
			<div className="Cards">
				{pulledCards.map((i: any) => <Card cardID = {i.CardID} name = {i.Name} red = {i.RedStat} blue = {i.BlueStat} green = {i.GreenStat} rarity = {i.Rarity} weakness = {i.Weakness} strength = {i.Strength}/>)}
			</div>
		</div>
	</>
  );
}