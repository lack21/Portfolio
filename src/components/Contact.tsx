import { useState } from "react";
import useIntersectionObserver from "./Observer";

function Contact({ currentLanguage }: { currentLanguage: string }) {
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
      <h2 className="heading hidden">
        {currentLanguage == "eng" ? "Contact Me" : "დამიკავშირდი"}
      </h2>
      <p className="sub-heading hidden">
        {currentLanguage == "eng" ? "Email me on " : "დამიკავშირდი "}
        relaxing987fhbsnd@gmail.com
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
          placeholder={currentLanguage == "eng" ? "Name" : "სახელი"}
          required
          className="hidden"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={currentLanguage == "eng" ? "Email" : "მეილი"}
          required
          className="hidden"
        />
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={currentLanguage == "eng" ? "Subject" : "თემა"}
          required
          className="hidden"
        />
        <textarea
          name="message"
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={currentLanguage == "eng" ? "Message" : "მესიჯი"}
          required
          className="hidden"
        ></textarea>
        <button className="btn hidden" type="submit" onClick={ResetForm}>
          {currentLanguage == "eng" ? "Submit" : "დადასტურება"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
