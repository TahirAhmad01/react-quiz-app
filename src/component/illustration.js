import classes from "../styles/iilustation.module.css";

export default function Illustration({ children }) {
	return (
		<div className={classes.illustration}>
			{/* <img src={signImg} alt="Signup" /> */}
			{children}
		</div>
	);
}
