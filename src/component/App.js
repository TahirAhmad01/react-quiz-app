import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/authcontext";
import "../styles/style.css";
import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import Signup from "./pages/signup";
import PrivetRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<PublicRoute exact path="/login">
							<Login />
						</PublicRoute>

						<PublicRoute exact path="/signup">
							<Signup />
						</PublicRoute>

						<PrivetRoute exact path="/quiz/:id">
							<Quiz />
						</PrivetRoute>

						<PrivetRoute exact path="/result">
							<Result />
						</PrivetRoute>
					</Switch>
				</Layout>
			</AuthProvider>
		</Router>
	);
}

export default App;
