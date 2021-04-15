import './Experience.css';

export function Experience() {
  return (
        <section className="experience">
          <h2 className="noShow">Experience</h2>
            <article>
              <header>
                <h3>U.S. Space Force: Genesis</h3>
                <span>Full-Stack Developer</span> 
              </header>
              <main> 
                <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/genesis.jpg" alt="AEHF Satellite"/>
                <ul>
                  <li>Military Communications Satellite (AEHF) resource-scheduling visualization software</li>
                  <li>second point</li>
                  <li>third point</li>
                </ul>
              </main>
            </article>
            <article>
              <header>
                <h3>U.S. Space Force: Software Development Immersive</h3>
                <span>Supra Coder</span>
              </header>
              <main>
                <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/supra.png" alt="Delta Element Logo" />
                <ul>
                  <li>Completed very hard quality training in full-stack development</li>
                  <li>1 of 29 selected out of &gt;300 applicants</li>
                  <li>something else about the program</li>
                </ul>
              </main>
            </article>
            <article>
              <header>
                <h3>Military GPS Security Engineering</h3>
                <span>Portfolio Manager</span>
              </header>
              <main>
                <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/smc.png" alt="Space and Missile Systems Center Logo" />
                <ul>
                  <li>Managed multiple programs</li>
                </ul>
              </main>
            </article>
        </section>
  );
}

