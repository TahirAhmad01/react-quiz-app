import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/style.css";
import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/quiz">
            <Quiz />
          </Route>

          <Route exact path="/result">
            <Result />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
