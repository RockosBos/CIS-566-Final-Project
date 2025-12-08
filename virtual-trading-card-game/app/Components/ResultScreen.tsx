import { useEffect, useState } from "react";
import "./ResultScreen.css";

export default function ResultScreen(props:any) {

	const [resultMessage, setResultMessage] = useState("");

	useEffect(() => {
		if(props.result == "W"){
			setResultMessage("Winner");
		}
		if(props.result == "L"){
			setResultMessage("Loser");
		}
	}, [props.result])

	return(
		<div className="results">
			<p className="ResultText" >{resultMessage}</p>
		</div>
	);
}