function ContactForm() {
  return (
    <form className="contact-form" noValidate>
      <h2 className="h3">Get Online Consultation</h2>
      <div className="input-fields">
        <div className="input-field">
          <label className="paragraph paragraph--medium" htmlFor="name">
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label className="paragraph paragraph--medium" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label className="paragraph paragraph--medium" htmlFor="specialist">
            Specialist
          </label>
          <select
            name="specialist"
            id="specialist"
            className="select"
          >
            <option value=""></option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Oncologist">Oncologist</option>
          </select>
        </div>
      </div>
      <button className="btn-primary btn-primary--large">
        Make an appointment
      </button>
    </form>
  );
}

export default ContactForm;
