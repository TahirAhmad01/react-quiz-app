import classes from "../styles/button.module.css";

export default function Button({ children, className }) {
	return (
		<button className={`${classes.button} ${className}`}>{children}</button>
	);
}
