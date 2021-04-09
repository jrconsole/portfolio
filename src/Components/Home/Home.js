import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">
      <header>
        <h1>
          <span>Russ</span>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/riserLogo.png" />
          <span>Riser</span>
        </h1>
        <h2>I Build Apps</h2>
      </header>
      <main>
        <Link to='/Apps' className="apps">
          <div className="darkBack">
            <h2>Apps</h2>
          </div>
        </Link>
        <Link to='/Tech' className="tech">
          <div className="darkBack">
            <h2>Tech</h2>
          </div>
        </Link>
        <Link to='/About' className="about">
          <div className="darkBack">
            <h2>About Me</h2>
          </div>
        </Link>
      </main>
    </div>
  );
}