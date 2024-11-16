import { useRef } from "react";

function ContactForm() {
  const fullName = useRef(null);
  const email = useRef(null);
  const specialist = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let isNameValid;
    let isEmailValid;
    let isSpecialistValid;

    const regexName = /\d/;
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!fullName.current.value) {
      fullName.current.classList.add("invalid");
      isNameValid = false;
    } else if (regexName.test(fullName.current.value)) {
      fullName.current.classList.add("invalid");
      isNameValid = false;
    } else {
      fullName.current.classList.remove("invalid");
      isNameValid = true;
    }
    if (!email.current.value) {
      email.current.classList.add("invalid");
      isEmailValid = false;
    } else if (!regexEmail.test(email.current.value)) {
      email.current.classList.add("invalid");
      isEmailValid = false;
    } else {
      email.current.classList.remove("invalid");
      isEmailValid = true;
    }
    if (!specialist.current.value) {
      specialist.current.classList.add("invalid");
      isSpecialistValid = false;
    } else {
      specialist.current.classList.remove("invalid");
      isSpecialistValid = true;
    }

    if (!isNameValid || !isEmailValid || !isSpecialistValid) {
      alert("Form not valid!");
    } else {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/forms/contact",
          {
            method: "POST",
            body: JSON.stringify({
              fullName: fullName.current.value,
              email: email.current.value,
              specialist: specialist.current.value,
            }),
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // const data = await response.json();
          // console.log(data);
          fullName.current.value = "";
          email.current.value = "";
          specialist.current.value = "";
          alert("Form sent successfully.");
        } else {
          alert("Form was sent but something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <h2 className="h3">Get Online Consultation</h2>
      <div className="input-fields">
        <div className="input-field">
          <label className="paragraph paragraph--medium" htmlFor="name">
            Full name
          </label>
          <input
            ref={fullName}
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
            ref={email}
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
            ref={specialist}
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
