import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import classes from "../styles/login.module.css";
import Button from "./button";
import Form from "./form";
import TextInput from "./textinput";

export default function LoginForm() {
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		loading: false,
	})
	
	const handleChange = (e) => {
		const value= e.target.value;
		const name= e.target.name;
		setValues({...values, [name]: value})
	}

	const { login } = useAuth();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setValues({
				...values,
				error: "",
				loading: true,
			})
			await login(values.email, values.password);
			history.push("/");
		} catch (err) {;
			setValues({
				...values,
				error: "Failed to login!",
				loading: false,
			})
		}
	}

	return (
		<Form className={`${classes.login}`} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				placeholder="Enter email"
				icon="alternate_email"
				required
				value={values.email}
				onChange={handleChange}
				name="email"
			></TextInput>

			<TextInput
				type="password"
				placeholder="Enter password"
				icon="lock"
				required
				value={values.password}
				onChange={handleChange}
				name="password"
			></TextInput>

			<Button disabled={values.loading} type="submit">			
				{values.loading ? <div className="loader ld_mini"></div> : <span>Submit Now</span>}
			</Button>

			{values.error && <p className="error">{values.error}</p>}

			<div className="info">
				Don't have an account? <Link to="/signup">Signup</Link> instead.
			</div>
		</Form>
	);
}
