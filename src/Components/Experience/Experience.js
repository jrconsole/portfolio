import './Experience.css';

export function Experience() {
  return (
        <section className="experience">
          <h2 className="noShow">Experience</h2>
            <div>
              <article>
                <header>
                  <h3>U.S. Space Force: Genesis</h3>
                  <span>Full-Stack Developer</span> 
                </header>
                <main> 
                  <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/genesis.jpg" alt="AEHF Satellite"/>
                  <ul>
                    <li>frontend changes to help data visualization</li>
                    <li>wrote tests to guarantee future code performance</li>
                    <li>worked with pipelines to allow for continuous deployments</li>
                    <li>utilized XP to develop new features </li>
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
                    <li>Decreased military contractor dependence. increased in-house software skill</li>
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
                    <li>Simultaneously managed 15 products' security developments</li>
                    <li>Oversaw a team of 20+ engineers</li>
                    <li>Continuously briefed organization leadership on status and conflict resolutions</li>
                    <li>Secured $6B+ of software & hardware critical to deploying next-generation GPS capability</li>
                  </ul>
                </main>
              </article>
            </div>
        </section>
  );
}

