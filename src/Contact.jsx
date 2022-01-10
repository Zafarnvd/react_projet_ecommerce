import React, { Fragment } from "react";
import home from "./assets/img/home..jpg";
import carte from "./assets/img/carte.png";

export default function Contact() {
  return (
    <Fragment>
      <div>
        <img className="contact" src={home} alt="" />
      </div>
      <div className="txt-contact">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-us">
        <div>
          <img src={carte} alt="" />
        </div>
        <div className="contact-form">
            <p>Send us your message</p>
            <input className="input" type="text" placeholder="Full Name" />
            <input className="input" type="text" placeholder="Phone Number" />
            <input className="input" type="text" placeholder="Email Adress" />
            <input className="msg" type="text" placeholder="Message" />
            <button>SEND</button>
        </div>
      </div>

    </Fragment>
  );
}
