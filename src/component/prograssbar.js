import classes from "../styles/prograssbar.module.css";
import Button from "./button";

export default function ProgressBar({ next, prev, submit, progress }) {
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={prev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>{progress}% Cimplete!</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${progress}%` }}
					></div>
				</div>
			</div>
			<Button
				className={classes.next}
				onClick={progress === 100 ? submit : next}
			>
				<span>{progress === 100 ? "Get Result" : "Next Question"}</span>
				<span className="material-icons-outlined"> arrow_forward </span>
			</Button>
		</div>
	);
}
