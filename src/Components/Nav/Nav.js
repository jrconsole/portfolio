import './Nav.css';
import { Link, useParams } from "react-router-dom";
import { Home } from '../Home/Home';
import { Apps } from '../Apps/Apps';
import { Tech } from '../Tech/Tech';
import { About } from '../About/About';
import { useEffect } from 'react';

export function Nav() {
  const { id } = useParams();

  useEffect(() => {
    let navColor;
    switch (id) {
      case "Apps":
        navColor = document.documentElement.style.getPropertyValue("--tertiaryColor");
        break;
      case "Tech":
        navColor = document.documentElement.style.getPropertyValue("--secondaryColor");
        break;
      case "About":
        navColor = document.documentElement.style.getPropertyValue("--primaryColor");
        break;
      default:
        navColor = document.documentElement.style.getPropertyValue("--primaryColor");
    }

    document.documentElement.style.setProperty("--navColor", navColor);
  }, [id])

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
        <Link to="/" className="toHome"><img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/riserLogo.png" /></Link>
        <ul>
          <Link to="/Tech" className={id === "Tech" ? "selected" : null}>Tech</Link>
          <Link to="/Apps" className={id === "Apps" ? "selected" : null}>Apps</Link>
          <Link to="/About" className={id === "About" ? "selected" : null}>About Me</Link>
        </ul>
      </nav> 

      <button id="hireMe">Hire Me</button>

      {renderContent(id)}
    </>
  );
}