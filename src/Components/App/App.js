import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';

export function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Nav />
            </Route>
          </Switch>
      </Router>

      <footer>
        <a href="https://github.com/jrconsole" target="_blank">
          <img 
            title="GitHub" 
            className="smallLogo"
            src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/github.png" />
        </a>
      </footer>
    </>
  );
}
