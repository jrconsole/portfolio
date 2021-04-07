import './About.css';

export function About() {
  return (
    <div className="content about">
      <header>
          <img className='portrait' src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/thinking.jpg" />
        <blockquote>"My name is Darth Vader. I am an extra-terrestrial from the planet Vulcan 🖖" - Marty McFly, BTTF</blockquote>
      </header>
      <main>
        <p>
          I'm a full-stack developer with a love for the MERNG stack. 
          I like long walks on the beach and coding deep into the night.
          I work hard to maintain a balance of speed, security, and user experience. 
          Let's see what we can build together!
        </p>
        <section>
          <h2>Experience</h2>
          <ul>
            <li>Full-Stack Developer: Genesis - Military Communications Satellite (AEHF) resource-scheduling visualization software
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/genesis.jpg" alt="AEHF Satellite"/>
            </li>
            <li>Supra Coder: U.S. Space Force software development immersive
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/supra.png" alt="Delta Element Logo" />
            </li>
            <li>Portfolio Manager: Military GPS Security Engineering
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/smc.png" alt="Space and Missile Systems Center Logo" />
            </li>
          </ul>
        </section>
        <section>
          <h2>Professional Interests</h2>
          <ul>
            <li>Education</li>
            <li>Project Management</li>
            <li>Dispute Resolution</li>
            <li>Decentralization</li>
          </ul>
        </section>
        <section>
          <h2>Favorite Books</h2>
          <ul>
            <li>The Will to Meaning - Viktor Frankl
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/willToMeaning.jpg" alt="The Will to Meaning book cover" />
            </li>
            <li>Pragmatism - William James
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/pragmatism.jpg" alt="Pragmatism book cover" />
            </li>
            <li>The Brain: The Story of You - David Eagleman
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/theBrain.jpg" alt="The Brain book cover" />
            </li>
            <li>Zero to One - Peter Thiel
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/zeroToOne.jpg" alt="Zero to One book cover" />
            </li>
            <li>Platform Revolution - Geoffrey G. Parker, Marshall W. Van Alstyne, Sangeet Paul Choudary
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/platformRevolution.jpg" alt="Platform Revolution book cover" />
            </li>
          </ul>
        </section>
        <section>
          <h2>Hobbies</h2>
          <ul>
            <li>
              <img title="Hiking/Running" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/hiking.jpg" alt="Russ Hiking" />
            </li>
            <li>
              <img title="Riding" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/motorcycle.jpg" alt="Russ' motorcycle" />
            </li>
            <li>
              <img title="Rocket League" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/rocketLeague.jpg" alt="Rocket League" />
            </li>
            <li>
              <img title="Good Food" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/sandwich.jpg" alt="Delicious Sandwich" />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

