import './Apps.css';

export function Apps() {
  return (
    <div className="content apps">
      <header className="noShow">
        <h1>My Apps</h1>
      </header>
      <main>
      <h1>Can I list tech here?</h1>
      <article>
          <a className="app genesis">
            <div className="darkBack">
              <h2>Genesis</h2>
            </div>
          </a>
          <div className="info">
            <ul className="stack">
              <li>
                <img 
                  title="Typescript" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/typescript.jpg" 
                  alt="Typescript logo" /> 
              </li>
              <li>
                <img 
                  title="React" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png" 
                  alt="React logo" />
              </li>
              <li>
                <img 
                  title="Redux" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/redux.png" 
                  alt="Redux logo" /> 
              </li>
              <li>
                <img 
                  title="Express" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png" 
                  alt="Express logo" /> 
              </li>
              <li>
                <img 
                  title="CouchDB" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/couchdb.png" 
                  alt="CouchDB logo" /> 
              </li>
              <li>
                <img 
                  title="Docker" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/docker.png" 
                  alt="Docker logo" /> 
              </li>
              <li>
                <img 
                  title="GitLab CI/CD Pipelines"
                  className="smallLogo" 
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/gitLab.png" 
                  alt="GitLab logo" /> 
              </li>
            </ul>
            <p className="text">
              The U.S. Space Force operates the military's AEHF communications satellite constellation. 
              <span> Genesis</span> is an app for space operators to schedule the constellation's resources across missions of varying priority.
              As a U.S. Space Force developer, I built software to visualize all ongoing missions for a given operator's region.
            </p>
          </div>
        </article>
        <article className="even">
          <a
            className="app iterate"
            href="https://iterate-client-dev-d9tpp.ondigitalocean.app/" 
            target="_blank">
            <div className="darkBack">
              <h2>Iterate</h2>
            </div>
          </a>
          <div className="info">
            <ul className="stack">
              <li>
                <img 
                  title="React"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png"
                  alt="React logo" />
              </li>
              <li>
                <img 
                  title="Express"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png"
                  alt="Express logo" /> 
              </li>
              <li>
                <img 
                  title="Apollo"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/apollo.png"
                  alt="Apollo logo" /> 
              </li>
              <li>
                <img 
                  title="GraphQL"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/graphQL.png"
                  alt="GraphQL logo" /> 
              </li>
              <li>
                <img 
                  title="Mongo (Atlas)" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/mongo.png"
                  alt="Mongo logo" /> 
              </li>
              <li>
                <img 
                  title="AWS S3"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/awsS3.png"
                  alt="AWS S3 logo" /> 
              </li>
              <li>
                <img 
                  title="Docker"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/docker.png"
                  alt="Docker logo" /> 
              </li>
              <li>
                <img
                  title="Digital Ocean"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/digitalOcean.png"
                  alt="Digital Ocean logo" /> 
              </li>
            </ul>
            {/* <a 
              className="live"
              href="https://iterate-client-m4p6a.ondigitalocean.app/" 
              target="_blank">
              <button>Live Page</button>
            </a> */}
            <p className="text">
              <a href="https://iterate-client-dev-d9tpp.ondigitalocean.app/">Iterate</a> is a start-up for leasing the industry's latest graphics cards. 
              As the sole developer, I built the frontend and backend of Iterate's reservation system.
              The frontend allows potential customers to place a reservation for the GPU of their choice, 
              while the backend includes a custom CMS for updating Card listings and managing Reservations.
              The backend is built out to support future features like reserving specific card variants, 
              and viewing your place on the waitlist.
            </p>
            <section className="code">
              <a href="https://github.com/jrconsole/iterate-client" target="_blank">
                <img 
                  title="Iterate Code" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/github.png" />
                <span>Front-End</span>
              </a>
              <a href="https://github.com/jrconsole/iterate-server" target="_blank">
                <img 
                  title="Iterate Code" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/github.png" />
                <span>Back-End</span>
              </a>
            </section>
          </div>
        </article>
        <article>
          <a 
            className="app violestates"
            href="https://violestates.herokuapp.com/" 
            target="_blank">
            <div className="darkBack">
              <h2>Violestates</h2>
            </div>
          </a>
          <div className="info">
            <ul className="stack">
              <li>
                <img 
                  title="React"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png"
                  alt="React logo" />
              </li>
              <li>
                <img 
                  title="Express"
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png"
                  alt="Express logo" /> 
              </li>
              <li>
                <img 
                  title="PostgreSQL" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/postgresql.png" 
                  alt="PostgreSQL logo" /> 
              </li>
              <li>
                <img 
                  title="Heroku" 
                  className="smallLogo"
                  src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/heroku.png" 
                  alt="Heroku logo" /> 
              </li>
            </ul>
            <p className="text">
              I built <a href="https://violestates.herokuapp.com/">Violestates</a> with owners/operators of small Real Estate portfolios in mind. 
              It allows potential renters to view, search, and apply for properties; 
              and it includes a custom CMS for the owners to update their property listings.
            </p>
            <a className="code" href="https://github.com/jrconsole/violestates" target="_blank">
              <img 
                title="Violestates Code" 
                className="smallLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/github.png" />
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}