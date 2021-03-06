import { useRef, useState } from "react";
import classes from "../styles/prograssbar.module.css";
import Button from "./button";

export default function ProgressBar({ next, prev, submit, progress }) {
	const [tooltip, setTooltip] = useState(false);
	const tooltipRef = useRef();

	function toggleToltip() {
		if (tooltip) {
			setTooltip(false);
			tooltipRef.current.style.display = "none";
		} else {
			setTooltip(true);
			tooltipRef.current.style.display = "block";
			tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
		}
	}

	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={prev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip} ref={tooltipRef}>
					{progress}% Cimplete!
				</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${progress}%` }}
						onMouseOver={toggleToltip}
						onMouseOut={toggleToltip}
					></div>
				</div>
			</div>
			<Button
				className={`${classes.next} ${classes.mr_right}`}
				onClick={progress === 100 ? submit : next}
			>
				<span>{progress === 100 ? "Get Result" : "Next Question"}</span>
				<span className="material-icons-outlined"> arrow_forward </span>
			</Button>
		</div>
	);
}
