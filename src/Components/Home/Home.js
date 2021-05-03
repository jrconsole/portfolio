import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">
      <header>
          <h1 className="title">Russ Riser</h1>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/riserNoMargin.png" />
          <span className="subtitle">I Build Apps</span>
      </header>
      <main>
        <Link to='/Tech' className="tech">
            Tech
        </Link>
        <Link to='/Apps' className="apps">
            Apps
        </Link>
        <Link to='/About' className="about">
            About Me
        </Link>
      </main>
    </div>
  );
}