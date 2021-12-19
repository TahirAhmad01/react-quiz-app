import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../context/authcontext";

export default function PublicRoute({ children, ...rest }) {
	const { currentUser } = useAuth();
	return currentUser ? (
		<Redirect to="/" />
	) : (
		<Route {...rest}>{children}</Route>
	);
}
