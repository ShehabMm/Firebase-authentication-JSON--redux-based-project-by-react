import React from "react";
import "./create.css";
// import emailjs from '@emailjs/browser';

const Form = () => {
  return (

<div className="modern-formjs">
      <form className="form-simple">
        <div className="input-group">
          <input type="text" required />
          <label htmlFor="name">Your Name</label>
        </div>
  
        <div className="input-group">
          <input type="text" required />
          <label htmlFor="number">Phone Number</label>
        </div>
  
        <div className="input-group">
          <input type="text" required />
          <label htmlFor="email">Your Email</label>
        </div>
  
        <div className="input-group">
          <textarea id="message" rows="8"></textarea>
  
          <label htmlFor="message">Your Mssage</label>
        </div>
  
        <button> Send a message</button>
      </form>
  
</div>  );
};

export default Form;
