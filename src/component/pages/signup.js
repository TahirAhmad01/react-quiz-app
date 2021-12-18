import signImg from "../../assests/images/signup.svg";
import Illustration from "../illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
	return (
		<>
			<h1>Create a new account</h1>
			<div className="column">
				<Illustration>
					<img src={signImg} alt="Signup" />
				</Illustration>
				<SignupForm />
			</div>
		</>
	);
}
