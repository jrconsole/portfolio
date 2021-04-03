import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hey, I'm Russ</h1>
        <span>and</span>
        <p>I make apps!</p>
      </header>
      <main>
        <section>
          <h2>My Apps</h2>
          <a href="https://iterate-client-dev-d9tpp.ondigitalocean.app/" target="_blank">Iterate</a>
          <br/>
          <a href="https://violestates.herokuapp.com/" target="_blank">Violestates</a>
          <br/>
          <span>Genesis</span>
        </section>
        <section>
          <h2>Tech</h2>
          <h3>Primary</h3>
          <span>HTML, CSS, Javascript, React, Express, Mongo (Atlas), GraphQL (Apollo)</span>
          <h3>Secondary</h3>
          <span>Typescript, PostgreSQL, Docker, Heroku, Digital Ocean</span>
          <h3>Tertiary</h3>
          <span>MySQL, Java Spring</span>
        </section>
        <section>
          <h2>About Me</h2>
          <p>
            I'm a full stack developer with a love for the MERNG stack. 
            I like long walks on the beach and coding deep into the night.
             I work hard to maintain a balance of speed, security, and user experience. And I'd love to see what we can create together!
          </p>
        </section>
      </main>
      <footer>
        <a href="https://github.com/jrconsole" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}

export default App;


/* 

--App--
<header/>
<main>
  <Dashboard />
<main>
<footer/>

--Dashboard--
<button>Apps<button/>
<button>Tech<button/>   onClick(setSelection)
<button>About<button/>
renderSelection(selection)

*/

