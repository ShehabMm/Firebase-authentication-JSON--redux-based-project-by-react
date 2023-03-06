import "./popup-form.css";
import React, { useState } from 'react';


const PopupForm = () => {
  const [showSendEmail, setshowSendEmail] = useState(false);
  const [showForm, setshowForm] = useState("");

  return (
    <div>


      <form className={`popup-form ${showForm}`}>


        <span onClick={() => {
          setshowForm("hide-popup-form")
        }}>X</span>
        <input>



        </input>
        <button onClick={(eo) => {
          eo.preventDefault()

          setshowSendEmail(true)
        }}> Reset password


        </button>
        <br /> <br />
        {showSendEmail && <p>please check your email to reset your password</p>
        }
      </form>

    </div>
  );
}

export default PopupForm;



