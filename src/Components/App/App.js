import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

export function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Nav />
            </Route>
          </Switch>
        </ScrollToTop>
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
