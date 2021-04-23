import './Books.css';

export function Books() {
  return (
    <section className="books">
      <h2 className="noShow">Favorite Books</h2>
      <ul>
        <li>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/willToMeaning.jpg" alt="The Will to Meaning book cover" />
          <span>The Will to Meaning</span>
          Viktor Frankl
        </li>
        <li>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/pragmatism.jpg" alt="Pragmatism book cover" />
          <span>Pragmatism</span>
          William James
        </li>
        <li>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/theBrain.jpg" alt="The Brain book cover" />
          <span>The Brain: The Story of You</span>
          David Eagleman
        </li>
        <li>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/zeroToOne.jpg" alt="Zero to One book cover" />
          <span>Zero to One</span>
          Peter Thiel
        </li>
        <li>
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/platformRevolution.jpg" alt="Platform Revolution book cover" />
          <span>Platform Revolution</span>
          Geoffrey G. Parker, Marshall W. Van Alstyne, Sangeet Paul Choudary
        </li>
      </ul>
    </section>
  );
}

