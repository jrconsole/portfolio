import './Interests.css';

export function Interests() {
  return (
    <section className="interests">
      <h2 className="noShow">Professional Interests</h2>

      <h3>Forward - Upward - Outward</h3>
      <p>A better future will be brought about by each of us devoting our life to the causes we care about most. 
        Problems are solved and life is improved not through arguing and engaging in conflict, but by imagining a better world and engineering solutions to whatever obstacles stand in the way.
        To enable each person to <span>focus</span> on their purpose, and avoid the distractions that are all around us, I have selected the following areas to <span>focus</span> my efforts:  
      </p>

      <div>
        <article>
          <header>
            <h3>Education</h3>
            <span>Increase access to quality, flexible, skill-based education.</span>
          </header>
          <main>
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/skillPlatforms.png" alt="Space and Missile Systems Center Logo" />
            <p>
              We need an education solution which 
              inspires people to improve their world, 
              provides a self-driven and exploratory process for them to determine how they want to do that, 
              and teaches them the skills required to bring about their vision.
            </p>
          </main>
        </article>
        <article>
          <header>
            <h3>Project Management</h3>
            <span>Shorten the pipeline from product creator to product consumer</span>
          </header>
          <main>
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/managementPlatforms.png" alt="Space and Missile Systems Center Logo" />
            <p>
              We need systems and software that enable artists and engineers to imagine and build products
              without the dilution of vision and inefficiency of middle management
              while leveraging user-feedback and specialization.
            </p>
          </main>
        </article>
        <article>
          <header>
            <h3>Dispute Resolution</h3>
            <span>Get back to effectual work by reducing, eliminating, or streamlining the argumentation process.</span>
          </header>
          <main>
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/justice.png" alt="Space and Missile Systems Center Logo" />
            <p>
              We need a way to resolve disputes, no matter how critical or trivial, 
              without without spending countless hours and paying hundreds of thousands of dollars for people to argue on our behalf.
            </p>
          </main>
        </article>
        <article>
          <header>
            <h3>Decentralization</h3>
            <span>Maintain individual sovereignty by reducing external dependencies.</span>
          </header>
          <main>
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/decentralized.png" alt="Space and Missile Systems Center Logo" />
            <p>
              We need systems where common tasks can be executed free of influence by a single third party. 
              Freeing processes from burdensome policy and infrastructure requirements will allow for faster innovation.
            </p>
          </main>
        </article>
      </div>
    </section>
  );
}

