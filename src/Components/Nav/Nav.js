import './Nav.css';
import { Switch, Route, Link, useParams } from "react-router-dom";
import { Home } from '../Home/Home';
import { Apps } from '../Apps/Apps';
import { Tech } from '../Tech/Tech';
import { About } from '../About/About';

export function Nav() {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case "Apps":
        return <Apps />;
        break;
      case "Tech":
        return <Tech />;
        break;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Apps">Apps</Link>
        </li>
        <li>
          <Link to="/Tech">Tech</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </nav> 

      {renderContent()}
    </>
  );
}