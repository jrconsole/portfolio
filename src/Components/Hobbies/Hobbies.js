import './Hobbies.css';

export function Hobbies() {
  return (
    <section className="hobbies">
      <h2 className="noShow">Hobbies</h2>
      <ul>
        <li className="run">
          <img title="Hiking/Running" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/hiking.jpg" alt="Russ Hiking" />
        </li>
        <li className="rocket">
          <img title="Rocket League" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/rocketLeague.jpg" alt="Rocket League" />
        </li>
        <li className="bike">
          <img title="Riding" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/motorcycle.jpg" alt="Russ' motorcycle" />
        </li>
        <li className="food">
          <img title="Good Food" src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/sandwich.jpg" alt="Delicious Sandwich" />
        </li>
      </ul>
    </section>
  );
}

