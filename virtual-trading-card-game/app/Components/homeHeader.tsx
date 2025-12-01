export default function HomeHeader(props:any) {

	const navToDraw = () => {
		props.setDisplayDraw(true);
		props.setDisplayGame(false);
	}

	const navToGame = () => {
		props.setDisplayDraw(false);
		props.setDisplayGame(true);
	}

  return (
	<>
		<div>
			<p>TIMER 00:00:00</p>
			<button onClick={navToDraw}>Draw Cards</button>
			<button onClick={navToGame}>Play Game</button>
		</div>
	</>
  );
}