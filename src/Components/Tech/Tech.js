import './Tech.css';

export function Tech() {
  return (
    <div className="content tech">
      <header className="noShow">
        <h1>Tech</h1>
      </header>
      <main>
        <section>
          <h2>Primary</h2>
          <div>
          <ul>
            <li>
              <img 
                title="HTML" 
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/html.png" 
                alt="HTML logo" />
              HTML
            </li>
            <li>
              <img 
                title="CSS" 
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/css.png"
                alt="CSS logo" />
              CSS
            </li>
            <li>
              <img 
                title= "Javascript"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/javascript.jpg"
                alt="Javascript logo" /> 
              Javascript
            </li>
            <li>
              <img 
                title="React"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/react.png"
                alt="React logo" /> 
              React
            </li>
            <li>
              <img 
                title="Redux"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/redux.png"
                alt="Redux logo" /> 
              Redux
            </li>
            <li>
              <img
                title="Express"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/express.png"
                alt="Express logo" /> 
              Express
            </li>
            <li>
              <img
                title="Apollo"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/apollo.png"
                alt="Apollo logo" /> 
              Apollo
            </li>
            <li>
              <img
                title="GraphQL"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/graphQL.png"
                alt="GraphQL logo" /> 
              GraphQL
            </li>
            <li>
              <img
                title="Mongo (Atlas)"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/mongo.png"
                alt="Mongo logo" /> 
              Mongo (Atlas)
            </li>
          </ul>
          </div>
        </section>
        <section>
          <h2>Secondary</h2>
          <ul>
            <li>
              <img
                title="Typescript"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/typescript.jpg"
                alt="Typescript logo" /> 
              Typescript
            </li>
            <li>
              <img
                title="PostgreSQL"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/postgresql.png"
                alt="PostgreSQL logo" /> 
              PostgreSQL
            </li>
            <li>
              <img
                title="Docker"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/docker.png"
                alt="Docker logo" /> 
              Docker
            </li>
            <li>
              <img
                title="Heroku"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/heroku.png"
                alt="Heroku logo" /> 
              Heroku
            </li>
            <li>
              <img
                title="Digital Ocean"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/digitalOcean.png"
                alt="Digital Ocean logo" /> 
              Digital Ocean
            </li>
            <li>
              <img
                title="AWS S3"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/awsS3.png"
                alt="AWS S3 logo" /> 
              AWS S3
            </li>
          </ul>
        </section>
        <section>
          <h2>Tertiary</h2>
          <ul>
            <li>
              <img
                title="GitLab CI/CD"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/gitLab.png"
                alt="GitLab logo" /> 
              GitLab CI/CD Pipelines
            </li>
            <li>
              <img
                title="MySQL"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/mysql.png"
                alt="MySQL logo" /> 
              MySQL
            </li>
            <li>
              <img
                title="Spring"
                className="largeLogo"
                src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/spring.png"
                alt="Spring logo" /> 
              Java Spring
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
