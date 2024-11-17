import notification from "../assets/notification.svg";
import mailLight from "../assets/mail-light.svg";
import mailDark from "../assets/mail-dark.svg";
import { useDarkMode } from "../context/DarkModeContext";
import { useRef } from "react";

function Newsletter() {
  const { isDarkMode } = useDarkMode();
  const email = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let isEmailValid;
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!email.current.value) {
      email.current.classList.add("invalid");
      isEmailValid = false;
    } else if (!regex.test(email.current.value)) {
      email.current.classList.add("invalid");
      isEmailValid = false;
    } else {
      email.current.classList.remove("invalid");
      isEmailValid = true;
    }

    if (!isEmailValid) {
      alert("Form not valid!");
    } else {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
          {
            method: "POST",
            body: JSON.stringify({
              email: email.current.value,
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
          email.current.value = "";
          alert("You have successfully signed up to our newsletter.");
        } else {
          alert("Form was sent but something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={notification} alt="notification" />
        <h2 className="h4">
          Subscribe to our newsletter
          <span className="form-heading-span">
            {" "}
            to stay informed about latest updates
          </span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="inner-container">
          <img
            className="mail"
            src={isDarkMode ? mailDark : mailLight}
            alt="mail"
          />
          <input
            ref={email}
            size="100"
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="off"
          />
        </div>
        <button className="btn-primary btn-primary--large">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
