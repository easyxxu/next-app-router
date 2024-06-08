import { useRef, useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);
  function registrationHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    // fetch user input (state or refs)
    // optional: validate input
    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.trim() === ""
    ) {
      setIsValidEmail(false);
      return;
    } else {
      setIsValidEmail(true);
    }
    // send valid data to API
    const reqBody = { email };

    fetch("/api/subscribedEmail", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
      {!isValidEmail && <p>Put valid email!</p>}
    </section>
  );
}

export default NewsletterRegistration;
