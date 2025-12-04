import { useState } from "react";
import HomeHeader from "../Components/homeHeader";
import Draw from "../Components/Draw";
import Game from "../Components/Game";

import '../pages/home.css';
import Deck from "../Components/Deck";

export default function Home(props: any) {

	const [displayDraw, setDisplayDraw] = useState(false);
	const [displayGame, setDisplayGame] = useState(false);
	const [displayDeck, setDisplayDeck] = useState(false);

  return (
	<div className="homeDiv">
		<HomeHeader setDisplayGame={setDisplayGame} setDisplayDraw={setDisplayDraw} setDisplayDeck={setDisplayDeck}/><br/>
		<div className="homeComponents">
			{displayDraw && <Draw userID = {props.userID}/>}
			{displayGame && <Game userID = {props.userID}/>}
			{displayDeck && <Deck userID = {props.userID}/>}
		</div>
	</div>
  );
}