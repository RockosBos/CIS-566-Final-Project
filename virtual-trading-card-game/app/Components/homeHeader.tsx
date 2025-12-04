import '../Components/button.css'

export default function HomeHeader(props:any) {

	const navToDraw = () => {
		props.setDisplayDraw(true);
		props.setDisplayGame(false);
		props.setDisplayDeck(false);
	}

	const navToGame = () => {
		props.setDisplayDraw(false);
		props.setDisplayGame(true);
		props.setDisplayDeck(false);
	}
	const navToCards = () => {
		props.setDisplayDraw(false);
		props.setDisplayGame(false);
		props.setDisplayDeck(true);
	}

  return (
	<>
		<div>
			<button className='button' onClick={navToDraw}>Draw Cards</button>
			<button className='button' onClick={navToGame}>Play Game</button>
			<button className='button' onClick={navToCards}>View deck</button>
		</div>
	</>
  );
}