
import '../Components/FailureComponent.css'

export default function FailureComponent(props:any) {

  return (
	
	<div className="failureDiv">
		<h1>{props.title}</h1>
		<p>{props.content}</p>
	</div>
	
  );
}