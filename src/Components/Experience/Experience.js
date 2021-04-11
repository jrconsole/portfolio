import './Experience.css';

export function Experience() {
  return (
        <section className="experience">
          <h2 className="noShow">Experience</h2>
            <article>
              <header>
                <h3>U.S. Space Force: Genesis</h3>
                <p>Full-Stack Developer</p> 
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
              <h3>U.S. Space Force: Software Development Immersive</h3>
              <p>Supra Coder</p>
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/supra.png" alt="Delta Element Logo" />
              <ul>
                <li>Accepted to highly selective skill development program</li>
                <li>Implemented </li>
              </ul>
            </article>
            <article>
              <h3>Military GPS Security Engineering</h3>
              <p>Portfolio Manager</p>
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/smc.png" alt="Space and Missile Systems Center Logo" />
              <ul>
                <li>Managed multiple programs</li>
              </ul>
            </article>
        </section>
  );
}

