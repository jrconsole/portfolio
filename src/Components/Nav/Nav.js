import './Nav.css';
import { Link, useParams } from "react-router-dom";
import { Home } from '../Home/Home';
import { Apps } from '../Apps/Apps';
import { Tech } from '../Tech/Tech';
import { About } from '../About/About';

export function Nav() {
  const { id } = useParams();

  const renderContent = (pageId) => {
    switch (pageId) {
      case "Apps":
        return <Apps />;
      case "Tech":
        return <Tech />;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <nav>
        <Link to="/" className="toHome"><img className="portrait" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/cover.jpg" /></Link>
        <ul>
          <Link to="/Tech" className={id === "Tech" ? "selected" : null}>Tech</Link>
          <Link to="/Apps" className={id === "Apps" ? "selected" : null}>Apps</Link>
          <Link to="/About" className={id === "About" ? "selected" : null}>About Me</Link>
        </ul>
      </nav> 

      {renderContent(id)}
    </>
  );
}