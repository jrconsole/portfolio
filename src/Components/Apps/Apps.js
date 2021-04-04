import './Apps.css';

export function Apps() {
  return (
    <>
      <header className="noShow">
        <h1>My Apps</h1>
      </header>
      <main>
        <article>
          <a href="https://iterate-client-dev-d9tpp.ondigitalocean.app/" target="_blank">
            <img src="../../../images/purpleCard.jpg" alt="Graphics Card" />
            <h2>Iterate</h2>
          </a>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>GraphQL (Apollo)</li>
            <li>Mongo (Atlas)</li>
            <li>AWS S3</li>
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
            <img src="../../../images/house.jpg" alt="House" />
            <h2>Violestates</h2>
          </a>
          <p>
            This app was built by myself (Russ) with owners/operators of small Real Estate portfolios in mind. 
            It allows potential renters to view, search, and apply for properties; 
            and it includes a custom CMS for the owner/operator to update their property listings.
          </p>
        </article>
        <article>
          <img src="../../../images/genesis.jpg" alt="AEHF Satellite" />
          <h2>Genesis</h2>
          <h1>Can I list tech here?</h1>
          <p>
            The U.S. Space Force operates the military's AEHF communications satellite constellation. 
            Genesis is an app for space operators to schedule the constellation's resources across missions of varying priority.
            As a U.S. Space Force developer, I built software to visualize all ongoing missions for a given operator's region.
          </p>
        </article>
      </main>
    </>
  );
}