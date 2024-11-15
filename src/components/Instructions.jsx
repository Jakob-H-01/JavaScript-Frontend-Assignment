import phoneLeft from "../assets/phone-1-screen.svg";
import phoneMiddle from "../assets/phone-middle.svg";
import phoneRight from "../assets/phone-3-screen.svg";

function Instructions() {
  return (
    <section className="section-instructions">
      <div className="wrapper">
        <h2 className="h2">How Does It Work?</h2>
        <div className="phones-container">
          <img className="phone-side" src={phoneLeft} alt="phone" />
          <img className="phone-middle" src={phoneMiddle} alt="phone" />
          <img className="phone-side" src={phoneRight} alt="phone" />
        </div>
        <div className="text-container">
          <h3 id="instructions-heading" className="h4">
            <span>Step 3. </span>Transfers to people from your contact list
          </h3>
          <p
            id="instructions-paragraph"
            className="paragraph paragraph--medium"
          >
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
