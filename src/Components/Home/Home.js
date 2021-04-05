import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">
      <header>
        <p>Hey, I'm Russ</p>
        <span>and</span>
        <h1>I build apps!</h1>
        <img className="portrait" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/suit.jpg" />
      </header>
      <main>
        <Link to='/Apps'>
          <h2>Apps</h2>
        </Link>
        <Link to='/Tech'>
          <h2>Tech</h2>
        </Link>
        <Link to='/About'>
          <h2>About Me</h2>
        </Link>
      </main>
    </div>
  );
}