import './Home.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <header>
        <h1>Hey, I'm Russ</h1>
        <img className="portrait" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/thinking.jpg" />
        <span>and</span>
        <p>I build apps!</p>
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
    </>
  );
}