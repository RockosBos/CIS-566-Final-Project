import { useState } from "react";
import HomeHeader from "../Components/homeHeader";
import Draw from "../Components/Draw";
import Game from "../Components/Game";
export default function Home(props: any) {

	const [displayDraw, setDisplayDraw] = useState(false);
	const [displayGame, setDisplayGame] = useState(false);

  return (
	<>
		<HomeHeader setDisplayGame={setDisplayGame} setDisplayDraw={setDisplayDraw}/>
		{displayDraw && <Draw userID = {props.userID}/>}
		{displayGame && <Game />}
	</>
  );
}