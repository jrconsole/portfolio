import './Apps.css';

export function Apps() {
  return (
    <div className="apps">
      <header className="noShow">
        <h1>My Apps</h1>
      </header>
      <main>
        <article>
          <a href="https://iterate-client-dev-d9tpp.ondigitalocean.app/" target="_blank">
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/purpleCard.JPG" alt="Graphics Card" />
            <h2>Iterate</h2>
          </a>
          <ul>
            <li>
              <img title="React" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png" alt="React logo" />
            </li>
            <li>
              <img title="Express" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png" alt="Express logo" /> 
            </li>
            <li>
              <img title="Apollo" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/apollo.png" alt="Apollo logo" /> 
            </li>
            <li>
              <img title="GraphQL" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/graphQL.png" alt="GraphQL logo" /> 
            </li>
            <li>
              <img title="Mongo (Atlas)" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/mongo.png" alt="Mongo logo" /> 
            </li>
            <li>
              <img title="AWS S3" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/awsS3.png" alt="AWS S3 logo" /> 
            </li>
            <li>
              <img title="Docker" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/docker.png" alt="Docker logo" /> 
            </li>
            <li>
              <img title="Digital Ocean" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/digitalOcean.png" alt="Digital Ocean logo" /> 
            </li>
          </ul>
          <a href="https://iterate-client-m4p6a.ondigitalocean.app/" target="_blank">
            <button>Live Page</button>
          </a>
          <p>
            <span>Iterate</span> is a start-up for leasing the industry's latest graphics cards. 
            As the sole developer, I (Russ) built the frontend and backend of Iterate's reservation system.
            The app includes a custom CMS for updating Card listings and managing Reservations.
            The backend is built out to support future features like reserving specific card variants, and viewing your place on the waitlist.
          </p>
        </article>
        <article>
          <a href="https://violestates.herokuapp.com/" target="_blank">
            <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/house.JPG" alt="House" />
            <h2>Violestates</h2>
          </a>
          <ul>
            <li>
              <img title="React" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png" alt="React logo" />
            </li>
            <li>
              <img title="Express" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png" alt="Express logo" /> 
            </li>
            <li>
              <img title="PostgreSQL" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/postgresql.png" alt="PostgreSQL logo" /> 
            </li>
            <li>
              <img title="Heroku" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/heroku.png" alt="Heroku logo" /> 
            </li>
          </ul>
          <p>
            This app was built by myself (Russ) with owners/operators of small Real Estate portfolios in mind. 
            It allows potential renters to view, search, and apply for properties; 
            and it includes a custom CMS for the owners to update their property listings.
          </p>
        </article>
        <article>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/genesis.jpg" alt="AEHF Satellite" />
          <h2>Genesis</h2>
          <h1>Can I list tech here?</h1>
          <ul>
            <li>
              <img title="Typescript" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/typescript.png" alt="Typescript logo" /> 
            </li>
            <li>
              <img title="React" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png" alt="React logo" />
            </li>
            <li>
              <img title="Redux" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/redux.png" alt="Redux logo" /> 
            </li>
            <li>
              <img title="Express" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png" alt="Express logo" /> 
            </li>
            <li>
              <img title="CouchDB" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/couchdb.png" alt="CouchDB logo" /> 
            </li>
            <li>
              <img title="Docker" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/docker.png" alt="Docker logo" /> 
            </li>
            <li>
              <img title="GitLab CI/CD Pipelines" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/gitLab.png" alt="GitLab logo" /> 
            </li>
          </ul>
          <p>
            The U.S. Space Force operates the military's AEHF communications satellite constellation. 
            Genesis is an app for space operators to schedule the constellation's resources across missions of varying priority.
            As a U.S. Space Force developer, I built software to visualize all ongoing missions for a given operator's region.
          </p>
        </article>
      </main>
    </div>
  );
}