function Contact() {
  return (
    <section className="contact">
      <h2 className="heading">Contact Me</h2>
      <p className="sub-heading">Email me on relaxing987fhbsnd@gmail.com</p>
      action="https://formsubmit.co/your@email.com" method="POST"
      <form
        className="form"
        action="https://formsubmit.co/relaxing987fhbsnd@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          rows={8}
          placeholder="Message"
          required
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
