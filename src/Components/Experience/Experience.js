import './Experience.css';

export function Experience() {
  return (
        <section className="experience">
          <h2>Experience</h2>
            <article>
              <h3>Full-Stack Developer: Genesis</h3>  
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/genesis.jpg" alt="AEHF Satellite"/>
              <ul>
                <li>- Military Communications Satellite (AEHF) resource-scheduling visualization software</li>
              </ul>
            </article>
            <article>Supra Coder: U.S. Space Force software development immersive
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/supra.png" alt="Delta Element Logo" />
            </article>
            <article>Portfolio Manager: Military GPS Security Engineering
              <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/smc.png" alt="Space and Missile Systems Center Logo" />
            </article>
        </section>
  );
}

