import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import classes from "../styles/login.module.css";
import Button from "./button";
import Form from "./form";
import TextInput from "./textinput";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { login } = useAuth();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push("/");
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Failed to login!");
		}
	}

	return (
		<Form className={`${classes.login}`} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				placeholder="Enter email"
				icon="alternate_email"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></TextInput>

			<TextInput
				type="password"
				placeholder="Enter password"
				icon="lock"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			></TextInput>

			<Button disabled={loading} type="submit">
				<span>Submit Now</span>
			</Button>

			{error && <p className="error">{error}</p>}

			<div className="info">
				Don't have an account? <Link to="/signup">Signup</Link> instead.
			</div>
		</Form>
	);
}
