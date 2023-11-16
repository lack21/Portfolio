import { useState } from "react";
import useIntersectionObserver from "./Observer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const {} = useIntersectionObserver();

  function ResetForm() {
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 2000);
  }

  return (
    <section className="contact">
      <h2 className="heading hidden">Contact Me</h2>
      <p className="sub-heading hidden">
        Email me on relaxing987fhbsnd@gmail.com
      </p>

      <form
        className="form"
        action="https://formsubmit.co/relaxing987fhbsnd@gmail.com"
        method="POST"
        target="_blank"
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="hidden"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="hidden"
        />
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
          className="hidden"
        />
        <textarea
          name="message"
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          className="hidden"
        ></textarea>
        <button className="btn hidden" type="submit" onClick={ResetForm}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
