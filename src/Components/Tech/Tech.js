import './Tech.css';

export function Tech() {
  return (
    <>
      <header className="noShow">
        <h1>Tech</h1>
      </header>
      <main>
        <section>
          <h2>Primary</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Mongo (Atlas)</li>
            <li>GraphQL (Apollo)</li>
          </ul>
        </section>
        <section>
          <h2>Secondary</h2>
          <ul>
            <li>Typescript</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>Heroku</li>
            <li>Digital Ocean</li>
            <li>AWS S3</li>
          </ul>
        </section>
        <section>
          <h2>Tertiary</h2>
          <ul>
            <li>MySQL</li>
            <li>Java Spring</li>
          </ul>
        </section>
      </main>
    </>
  );
}
