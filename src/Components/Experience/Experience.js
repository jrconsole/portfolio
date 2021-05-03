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
                    <li>
                      <span>I built a dashboard for data visualization using React & Redux. </span> 
                      Genesis was previously only meant for an operator to perform tasks. 
                      The dashboard allows for other users in the organization to get valuable information about ongoing operations.
                    </li>
                    <li>
                      <span>Improved server performance by 50%. </span>
                      Genesis users noted that a section of the app was very slow.
                      I identified several places where nested database queries were slowing server response time, and aggregated the queries.
                    </li>
                    <li>
                      <span>Maintained >80% code coverage with unit tests using Jest & Enzyme. </span>
                      I developed new features using Test Driven Development (TDD) and updated/added to unit tests over time.
                    </li>
                    <li>
                      <span>Deployed new features weekly using GitLab CI/CD pipelines. </span>
                      Within our pipeline I worked with Fortify, Sonarqube, and TruffleHog to maintain code security and best-practices.
                      This allowed Genesis to comply with the US Space Force's priority of practicing DevSecOps.
                    </li>
                    <li>
                      <span>Enabled user-input, storage, and visualization of new data. </span>
                      The user wanted to view information that Genesis did not previously store.
                      I updated data models, queries, user-input forms, and dashboards so that the user could store and view that data on demand.
                    </li>
                  </ul>
                </main>
              </article>
              <article>
                <header>
                  <h3>U.S. Space Force: Software Development Immersive</h3>
                  <span>Supra Coder</span>
                </header>
                <main>
                  <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/deltaWhite.png" alt="Delta Element Logo" />
                  <ul>
                    <li>
                      <span>Undertook full-time, 3-month skill-development program in full-stack development. </span>
                      I practiced and deepened my skills in React, Express, and PostgreSQL 
                      while adding new skills in Docker, data structures, and microservice architecture.
                    </li>
                    <li>
                      <span>1 of 29 selected out of &gt;300 applicants. </span>
                      I leveraged my previous experience in app development to land a spot among the first Cohort of the US Space Force's Software Development Immersive.
                    </li>
                    <li>
                      <span>Enabled US Space Force's commencement of their in-house software development strategy. </span>
                      As the US Space Force looks to decrease their dependence on contractors for software dev,
                      I and the other Supra Coders (SDI members) proved the model for future generations of Space Force Guardians.
                    </li>
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
                    <li>
                      <span>Secured $6B+ of software & hardware critical to deploying next-generation GPS capability. </span>
                      My team was responsible for evaluating Military GPS receiver developments against strict security requirements.
                      I equipped and organized my people to guarantee that products were not deployed until they were secure.
                    </li>
                    <li>
                      <span>Simultaneously managed 15 products' security developments. </span>
                      With various types of receivers each at a different stage of development, from initial design to pre-deployment testing, my team analyzed, tested, and thoroughly documented every product.
                      Faced with cost, schedule, performance, and security concerns, I created schedules and planned events to meet the needs of all stakeholders.
                    </li>
                    <li>
                      <span>Organized and deployed a team of 20+ engineers. </span>
                      My team, composed of experts in Information Assurance, Cryptography, and Anti-Tamper, were constantly at test events, reviewing documentation, and authoring reports.
                      I ensured that all activities were staffed adequately with the appropriate expertise, and that junior members received the right assignments to optimize their growth potential. 
                    </li>
                    <li>
                      <span>Continuously updated my organization's leadership on status and conflict resolutions. </span> 
                      I prepared my leadership with security-impact reports, cost-estimates, and recommendations so that they could make informed decisions for the organization.
                    </li>
                  </ul>
                </main>
              </article>
            </div>
        </section>
  );
}

