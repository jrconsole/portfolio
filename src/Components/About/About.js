import './About.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Experience } from '../Experience/Experience';
import { Interests } from '../Interests/Interests';
import { Books } from '../Books/Books';
import { Hobbies } from '../Hobbies/Hobbies';

export function About() {
  return (
    <div className="content about">
      <header>
          <img className='portrait' src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/suit.jpg" />
        <blockquote>"My name is Darth Vader. I am an extra-terrestrial from the planet Vulcan 🖖" - Marty McFly, BTTF</blockquote>
      </header>
      <main>
        <div className="centeredArea">
          <p>
            Hello there! I'm a full-stack developer with a love for the MERNG stack. 
            I like long walks on the beach and coding deep into the night.
            I work hard to maintain a balance of speed, security, and user experience. 
            Let's see what we can build together!
          </p>
        </div>

        <Link to="/About">Experience</Link>
        <Link to="/About/Interests">Interests</Link>
        <Link to="/About/Books">Books</Link>
        <Link to="/About/Hobbies">Hobbies</Link>

        <Switch>
          <Route exact path="/About">
            <Experience />
          </Route>
          <Route path="/About/Interests">
            <Interests />
          </Route>
          <Route path="/About/Books">
            <Books />
          </Route>
          <Route path="/About/Hobbies">
            <Hobbies />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

