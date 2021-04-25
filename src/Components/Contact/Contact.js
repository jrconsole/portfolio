import './Contact.css';

export function Contact(props) {

  return (
    <div className="contact">
      <div className="darkBack" onClick={props.close} />
      <div className="window">
        <h2>Contact Me</h2>
        <a href="tel:+17605799697">(760) 579-9697</a>
        <a href="mailto:jrconsole@protomail.com">jrconsole@protonmail.com</a>
        <a 
          href="https://www.linkedin.com/in/j-russell-console" 
          className="social"
          target="_blank">
          <img src="https://russ-riser-portfolio.s3-us-west-1.amazonaws.com/linkedin.png"/>
        </a>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  );
}
