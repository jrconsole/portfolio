import './Books.css';

export function Books() {
  return (
    <section className="books">
      <h2 className="noShow">Favorite Books</h2>
      <ul>
        <li>The Will to Meaning - Viktor Frankl
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/willToMeaning.jpg" alt="The Will to Meaning book cover" />
        </li>
        <li>Pragmatism - William James
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/pragmatism.jpg" alt="Pragmatism book cover" />
        </li>
        <li>The Brain: The Story of You - David Eagleman
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/theBrain.jpg" alt="The Brain book cover" />
        </li>
        <li>Zero to One - Peter Thiel
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/zeroToOne.jpg" alt="Zero to One book cover" />
        </li>
        <li>Platform Revolution - Geoffrey G. Parker, Marshall W. Van Alstyne, Sangeet Paul Choudary
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/platformRevolution.jpg" alt="Platform Revolution book cover" />
        </li>
      </ul>
    </section>
  );
}

