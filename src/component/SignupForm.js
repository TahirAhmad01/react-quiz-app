import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import Button from "./button";
import Checkbox from "./chekbox";
import Form from "./form";
import TextInput from "./textinput";

export default function SignupForm() {
	const [values, setValues] =useState({
		username : "",
		email: "",
		password: "",
		confirmPassword: "",
		error: "",
		loading: false,
	});


	const handleChange = (e) => {
		const value= e.target.value;
		const name = e.target.name;
		setValues({...values, [name]: value })

	}

	const [agree, setAgree] = useState("");

	const { signup } = useAuth();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		// do validation
		if (values.password !== values.confirmPassword) {
			return setValues({
				...values,
				error: "Passwords don't match!"
			})
		}

		try {
			setValues({
				...values,
				loading: true,
				error: ""
			})
			await signup(values.email, values.password, values.username);
			history.push("/");
		} catch (err) {
			setValues({
				...values,
				loading: false,
				error: "Failed to create an account!"
			})
		}
	}

	return (
		<Form style={{ height: "500px" }} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				placeholder="Enter name"
				icon="person"
				required
				value={values.username}
				name="username"
				onChange={handleChange}
			/>

			<TextInput
				type="text"
				required
				placeholder="Enter email"
				icon="alternate_email"
				value={values.email}
				name="email"
				onChange={handleChange}
			/>

			<TextInput
				type="password"
				required
				placeholder="Enter password"
				icon="lock"
				value={values.password}
				name="password"
				onChange={handleChange}
			/>

			<TextInput
				type="password"
				required
				placeholder="Confirm password"
				icon="lock_clock"
				value={values.confirmPassword}
				name="confirmPassword"
				onChange={handleChange}
			/>

			<Checkbox
				required
				text="I agree to the Terms &amp; Conditions"
				value={agree}
				name="agree"
				onChange={(e) => setAgree(e.target.value)}
			/>

			<Button disabled={values.loading} type="submit">
				{values.loading ? <div className="loader ld_mini"></div> : <span>Submit Now</span>}
			</Button>

			{values.error && <p className="error">{values.error}</p>}

			<div className="info">
				Already have an account? <Link to="/login">Login</Link> instead.
			</div>
		</Form>
	);
}
