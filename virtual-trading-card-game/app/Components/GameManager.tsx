import { SetStateAction, useEffect, useState } from "react";
import Card from "./card";
import { getAllCards } from "../api/cards";
import "./card.css";
import "./GameManager.css";

export default function GameManager(props:any){

	const [playerCards, setPlayerCards] = useState<any[]>([{},{},{}]);
	const [opponentCards, setOpponentCards] = useState<any[]>([{},{},{}]);

	const [selectedPlayerCard, setSelectedPlayerCard] = useState<any>();
	const [selectedOpponentCard, setSelectedOpponentCard] = useState<any>();

	const [playerCardBorders, setPlayerCardBorders] = useState(["white", "white", "white"]);
	const [opponentCardBorders, setOpponentCardBorders] = useState(["white", "white", "white"]);

	const [cards, setCards] = useState<any>([]);

	let playerCardBuild: SetStateAction<any[]> = [];
	let opponentCardBuild: SetStateAction<any[]> = [];

	let random;
	let initialPlayerCardState: never[] = [];

	useEffect(() => {
		const getCards = async () => {
			getAllCards().then((res:any) => {

				setCards(res);
				props.selectedCards.forEach((i:any) => {
					res.forEach((e:any) => {
						if(e.CardID == i){
							playerCardBuild.push(e);
						}
					});
				});
				setPlayerCards(playerCardBuild);

				let i = 0;
				while(i < 3){
					let random = Math.floor(Math.random() * res.length);
					res.forEach((e:any) => {
						if(e.CardID == random){
							opponentCardBuild.push(e);
						}
					});
					
					i++;
				}
				setOpponentCards(opponentCardBuild);
			});
		}
		getCards();
	}, [props.selectedCards]);

	const playerCardClick = (id:any) => {
		let tempPlayerCardColors = ['white', 'white', 'white'];

		tempPlayerCardColors[id] = "green";
		setPlayerCardBorders(tempPlayerCardColors);
		setSelectedPlayerCard(playerCards[id]);
		
	}

	const opponentCardClick = (id:any) => {
		let tempOpponentCardColors = ['white', 'white', 'white'];

		tempOpponentCardColors[id] = "red";
		setOpponentCardBorders(tempOpponentCardColors);
		setSelectedOpponentCard(opponentCards[id]);
	}

	useEffect(() => {
		if(selectedPlayerCard != undefined && selectedOpponentCard != undefined){
			let player:any = selectedPlayerCard;
			let opponent:any = selectedOpponentCard;
			let attackMultiplier = 0.0, defenseMultiplier = 0.0;
			console.log(player);
			console.log(opponent);
			
			let playerAttack = 0, opponentDefense = 0;
			switch(opponent.Type){
				case "R":
					opponentDefense = opponent.RedStat;
					break;
				case "G":
					opponentDefense = opponent.GreenStat;
					break;
				case "B":
					opponentDefense = opponent.BlueStat;
					break;
			}

			switch(player.Type){
				case "R":
					playerAttack = player.RedStat;
					break;
				case "G":
					playerAttack = player.GreenStat;
					break;
				case "B":
					playerAttack = player.BlueStat;
					break;
			}

			if(opponent.Weakness == player.Type && player.Type != "N"){
				attackMultiplier = 1.25;
			}
			else if(opponent.Strength == player.Type && player.Type != "N"){
				attackMultiplier = 0.75;
			}
			else{
				attackMultiplier = 1.0;
			}

			let rng = Math.floor(Math.random() * 100);
			let attackResult = (rng + playerAttack - opponentDefense) * attackMultiplier;
			console.log(`${attackResult} = ${rng} + ${playerAttack} - ${opponentDefense} * ${attackMultiplier}`);
			if(attackResult > 75){
				
			}
			else{
				console.log("miss");
			}
			
			setSelectedPlayerCard(undefined);
			setSelectedOpponentCard(undefined);
			setPlayerCardBorders(["white", "white", "white"]);
			setOpponentCardBorders(["white", "white", "white"]);


		}
	}, [selectedPlayerCard, selectedOpponentCard]);

	return(
		<>
		<div className="GameScreen">
			<h1>Opponent</h1>
			<div className="opponent">
				<div className="opponentCard" onClick={() => opponentCardClick(0)} style={{border: `5px solid ${opponentCardBorders[0]}`}}>
					<Card cardID = {opponentCards[0].CardID} name = {opponentCards[0].Name} red = {opponentCards[0].RedStat} blue = {opponentCards[0].BlueStat} green = {opponentCards[0].GreenStat} rarity = {opponentCards[0].Rarity} weakness = {opponentCards[0].Weakness} strength = {opponentCards[0].Strength} type = {opponentCards[0].Type}/>
				</div>
				<div className="opponentCard" onClick={() => opponentCardClick(1)} style={{border: `5px solid ${opponentCardBorders[1]}`}}>
					<Card cardID = {opponentCards[1].CardID} name = {opponentCards[1].Name} red = {opponentCards[1].RedStat} blue = {opponentCards[1].BlueStat} green = {opponentCards[1].GreenStat} rarity = {opponentCards[1].Rarity} weakness = {opponentCards[1].Weakness} strength = {opponentCards[1].Strength} type = {opponentCards[1].Type}/>
				</div>
				<div className="opponentCard" onClick={() => opponentCardClick(2)} style={{border: `5px solid ${opponentCardBorders[2]}`}}>
					<Card cardID = {opponentCards[2].CardID} name = {opponentCards[2].Name} red = {opponentCards[2].RedStat} blue = {opponentCards[2].BlueStat} green = {opponentCards[2].GreenStat} rarity = {opponentCards[2].Rarity} weakness = {opponentCards[2].Weakness} strength = {opponentCards[2].Strength} type = {opponentCards[2].Type}/>
				</div>
			</div>
			<h1>Player</h1>
			<div className="player">
				<div className="playerCard" onClick={() => playerCardClick(0)} style={{border: `5px solid ${playerCardBorders[0]}`}}>
					<Card cardID = {playerCards[0].CardID} name = {playerCards[0].Name} red = {playerCards[0].RedStat} blue = {playerCards[0].BlueStat} green = {playerCards[0].GreenStat} rarity = {playerCards[0].Rarity} weakness = {playerCards[0].Weakness} strength = {playerCards[0].Strength} type = {playerCards[0].Type}/>
				</div>
				<div className="playerCard" onClick={() => playerCardClick(1)} style={{border: `5px solid ${playerCardBorders[1]}`}}>
					<Card cardID = {playerCards[1].CardID} name = {playerCards[1].Name} red = {playerCards[1].RedStat} blue = {playerCards[1].BlueStat} green = {playerCards[1].GreenStat} rarity = {playerCards[1].Rarity} weakness = {playerCards[1].Weakness} strength = {playerCards[1].Strength} type = {playerCards[1].Type}/>
				</div>
				<div className="playerCard" onClick={() => playerCardClick(2)} style={{border: `5px solid ${playerCardBorders[2]}`}}>
					<Card cardID = {playerCards[2].CardID} name = {playerCards[2].Name} red = {playerCards[2].RedStat} blue = {playerCards[2].BlueStat} green = {playerCards[2].GreenStat} rarity = {playerCards[2].Rarity} weakness = {playerCards[2].Weakness} strength = {playerCards[2].Strength} type = {playerCards[2].Type}/>
				</div>
			</div>
		</div>
		</>
	);
}