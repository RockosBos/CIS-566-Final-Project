import Card from "./card";

export default function CardWithQuantity(props:any) {

  return (
	<>
		<div>
			<Card cardID = {props.cardID} name = {props.name} red = {props.red} blue = {props.blue} green = {props.green} rarity = {props.rarity} weakness = {props.weakness} strength = {props.strength}/>
			<br />
			<h1>x{props.quantity}</h1>
		</div>
	</>
  );
}