import React from "react";
import "./formjsn.css";
// import emailjs from '@emailjs/browser';
import { AiOutlineUser } from 'react-icons/ai';
import{TbMessageCircle} from 'react-icons/tb';
import{AiOutlineMail} from 'react-icons/ai';
import{BsTelephone} from 'react-icons/bs';







const Form = () => {
  return (

    <div className="modern-formjss">
      <form className="form-simple">
        <div className="input-group">
          <input type="text" required />
          <label htmlFor="name" > <AiOutlineUser/>   Your Name</label>
        </div>

        <div className="input-group">
          <input type="text" required />
          <label htmlFor="number"> <BsTelephone/>Phone Number</label>
        </div>

        <div className="input-group">
          <input type="text" required />
          <label htmlFor="email"><AiOutlineMail/>Your Email</label>
        </div>

        <div className="input-group">
          <textarea id="message" rows={8} ></textarea>

          <label htmlFor="message">  <TbMessageCircle/> Your Mssage</label>
        </div>

        <button> Send a message</button>
      </form>

    </div>);
};

export default Form;
