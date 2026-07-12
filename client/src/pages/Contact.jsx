function Contact() {
  return (
    <div className="form">
      <h1>Contact Us</h1>

      <input type="text" placeholder="Name" />

      <input type="email" placeholder="Email" />

      <textarea rows="6" placeholder="Message"></textarea>

      <button>Send</button>
    </div>
  );
}

export default Contact;