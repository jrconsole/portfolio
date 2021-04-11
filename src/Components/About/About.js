import './About.css';
import { useEffect } from 'react';
import { Switch, Route, Link, useLocation, withRouter } from 'react-router-dom';
import { Experience } from '../Experience/Experience';
import { Interests } from '../Interests/Interests';
import { Books } from '../Books/Books';
import { Hobbies } from '../Hobbies/Hobbies';

export function About() {
  const { pathname } = useLocation();
  const subPath = pathname.split('/')[2] || 'Experience';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subNav = document.getElementById('subNav');
  if(subNav) {
    subNav.scrollIntoView({behavior: "smooth", block: "center"})
  }

  return (
    <div className="content about">
      <header>
          <img className='portrait' src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/suit.jpg" />
        <div className="centeredArea">
        <blockquote>
          "<span>My name is Darth Vader. I am an extra-terrestrial from the planet Vulcan</span> 🖖"
          <br/> 
          - Marty McFly, BTTF
        </blockquote>
          <p>
            Hello there! I'm a full-stack developer with a love for the MERNG stack. 
            I like long walks on the beach and coding deep into the night.
            I work hard to maintain a balance of speed, security, and user experience.
            <br/><br/>Let's see what we can build together!
          </p>
        </div>
      </header>
      <main>

        <ul id="subNav" className="nav">
          <Link to="/About" className={subPath === "Experience" ? "selected" : null}>Experience</Link>
          <Link to="/About/Interests" className={subPath === "Interests" ? "selected" : null}>Professional Interests</Link>
          <Link to="/About/Books" className={subPath === "Books" ? "selected" : null}>Books</Link>
          <Link to="/About/Hobbies" className={subPath === "Hobbies" ? "selected" : null}>Hobbies</Link>
        </ul>

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

