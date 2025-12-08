import GameSelectCards from "./GameSelectCards";
import "./Game.css"
import { useEffect, useState } from "react";
import GameManager from "./GameManager";
import ResultScreen from "./ResultScreen";

export default function Game(props:any) {

	const [selectedCards, setSelectedCards] = useState([]);
	const [showCardSelect, setShowCardSelect] = useState(true);
	const [showGame, setShowGame] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [result, setResult] = useState("");

	useEffect(() => {
		const checkGameTransition = () => {
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
			{showCardSelect && <GameSelectCards userID = {props.userID} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>}
			{showGame && <GameManager selectedCards={selectedCards} setResult={setResult} setShowResults={setShowResults} setShowGame={setShowGame}/>}
			{showResults && <ResultScreen result = {result} />}
		</div>
	</>
  );
}