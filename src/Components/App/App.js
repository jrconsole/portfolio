import { useState, useEffect } from 'react';
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
  const majorPath = pathname.split('/')[1];

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [majorPath]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const initCSSVars = () => {
  document.documentElement.style.setProperty("--popColor", "#FF0000"); //red
  document.documentElement.style.setProperty("--textColor", "#D3D3D3"); //greyish-white
  document.documentElement.style.setProperty("--primaryColor", "#0D5DFF"); //light blue
  document.documentElement.style.setProperty("--secondaryColor", "#260BDE"); //royal blue
  document.documentElement.style.setProperty("--tertiaryColor", "#9300F5"); //purple
  document.documentElement.style.setProperty("--quaternaryColor", "#E000C2"); //pink
  document.documentElement.style.setProperty("--primaryBackColor", "#353535"); //light grey
  document.documentElement.style.setProperty("--secondaryBackColor", "#292929"); //dark grey

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export function App() {
  const [ banner, setBanner ] = useState("banner");

  initCSSVars();
  return (
    <>
      {/* <div className={banner}>
        Mobile layout is under developent. For best results, view on desktop or check back after 4 May.
        <br/>
        - Russ, 1 May 2021
        <button onClick={() => setBanner("noShow")}>Close</button>
      </div> */}
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
        <a href="https://github.com/russriser" target="_blank">
          <img 
            title="GitHub" 
            className="smallLogo"
            src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/github.png" />
        </a>
      </footer>
    </>
  );
}
