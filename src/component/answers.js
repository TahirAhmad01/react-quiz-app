import { Fragment } from "react/cjs/react.production.min";
import classes from "../styles/answers.module.css";
import Checkbox from "./chekbox";

export default function Answers({ options = [], input, handleChange }) {
	return (
		<div className={classes.answers}>
			{options.map((option, index) => (
				<Fragment key={index}>
					{input ? (
						<Checkbox
							key={index}
							className={classes.answer}
							text={option.title}
							value={index}
							checked={option.checked}
							onChange={(e) => handleChange(e, index)}
						/>
					) : (
						<Checkbox
							key={index}
							className={`${classes.answer} ${
								option.correct
									? classes.correct
									: option.checked
									? classes.wrong
									: null
							} `}
							text={option.title}
							defaultChecked={option.checked}
							disabled
						/>
					)}
				</Fragment>
			))}
		</div>
	);
}
