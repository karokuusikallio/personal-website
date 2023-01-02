import { useState } from "react";
import { poppins300 } from "../pages/_app";
import { poppins400 } from "../pages/_app";
import { poppins500 } from "../pages/_app";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/46062ed0-813a-11ed-b38f-a1ed22f366b1";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <p style={{ padding: "1rem" }} className={poppins400.className}>
          I&apos;ll be in touch very soon.
        </p>
      </>
    );
  }

  return (
    <>
      <h3>Write me something</h3>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          className={poppins300.className}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className={poppins300.className}
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          className={poppins300.className}
        />
        <button type="submit" className={poppins500.className}>
          Send a message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
