import logImg from "../../assests/images/login.svg";
import Illustration from "../illustration";
import LoginForm from "../loginForm";

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>
			<div className="column">
				<Illustration>
					<img src={logImg} alt="Login" />
				</Illustration>
				<LoginForm />
			</div>
		</>
	);
}
