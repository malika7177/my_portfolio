import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iz3p9j6", "template_hgyhv38", form.current, {
        publicKey: "o_z34X9a9EfwVq400",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact">
      <h1 className="sectionTitle">Contact</h1>
      <p>
        Need to get in contact or just want to send a message my way? <br /> Use
        this form below.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="col-3">
          <input
            className="effect-8"
            type="text"
            placeholder="Name"
            name="from_name"
          />
          <span className="focus-border">
            <i></i>
          </span>
        </div>
        <div className="col-3">
          <input
            className="effect-8"
            type="email"
            placeholder="Email"
            name="from_email"
          />
          <span className="focus-border">
            <i></i>
          </span>
        </div>
        <textarea
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="button-57" type="submit">
          <span className="text">send</span>
          <span>send</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
