function Contact() {
  return (
    <section className="contact">
      <h2 className="heading">Contact Me</h2>
      <p className="sub-heading">Email me on relaxing987fhbsnd@gmail.com</p>

      <form className="form">
        <input type="text" name="text" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          rows={8}
          placeholder="Message"
          required
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
