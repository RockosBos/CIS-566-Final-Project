import GameSelectCards from "./GameSelectCards";
import "./Game.css"
import { useEffect, useState } from "react";
import GameManager from "./GameManager";

export default function Game(props:any) {

	const [selectedCards, setSelectedCards] = useState([]);
	const [showCardSelect, setShowCardSelect] = useState(true);
	const [showGame, setShowGame] = useState(false);

	useEffect(() => {
		const checkGameTransition = () => {
			console.log(selectedCards.length);
			if(selectedCards.length > 2){
				setShowCardSelect(false);
				setShowGame(true);
			}
		}
		checkGameTransition();
	}, [selectedCards])

  return (
	<>
		<div className="game">
			<p>{selectedCards}</p>
			{showCardSelect && <GameSelectCards userID = {props.userID} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>}
			{showGame && <GameManager />}
		</div>
	</>
  );
}