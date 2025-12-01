import { useState } from "react";
import Image from 'next/image';

export default function Card(props: any){

	return(
		<>
			<p>Card ID: {props.cardID}</p>
			<p>Card Name: {props.name}</p>
			<Image src={`/Images/${props.name}.png`} alt='Image' width="100" />
			<div className="Stats">
				<p>{props.red}</p>
				<p>{props.blue}</p>
				<p>{props.green}</p>
			</div>
			<p>{props.rarity}</p>
			<p>{props.weakness}</p>
			<p>{props.strength}</p>
		</>
	)
} 