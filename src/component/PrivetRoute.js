import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../context/authcontext";

export default function PrivetRoute({ children, ...rest }) {
	const { currentUser } = useAuth();
	return currentUser ? (
		<Route {...rest}>{children}</Route>
	) : (
		<Redirect to="/login" />
	);
}
