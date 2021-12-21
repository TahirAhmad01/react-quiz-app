import classes from "../styles/analysis.module.css";
import Questions from "./questions";

export default function Analysis({ answers }) {
	return (
		<div className={classes.analysis}>
			<h1>Question Analysis</h1>
			<Questions answers={answers} />
		</div>
	);
}
