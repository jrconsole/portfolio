import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">
      <header>
          <h1>Russ Riser</h1>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/riserNoMargin.png" />
          <span>I Build Apps</span>
      </header>
      <main>
        <Link to='/Tech' className="tech">
          <div /*className="darkBack"*/>
            <h2>Tech</h2>
          </div>
        </Link>
        <Link to='/Apps' className="apps">
          <div /*className="darkBack"*/>
            <h2>Apps</h2>
          </div>
        </Link>
        <Link to='/About' className="about">
          <div /*className="darkBack"*/>
            <h2>About Me</h2>
          </div>
        </Link>
      </main>
    </div>
  );
}