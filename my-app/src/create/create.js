import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const navigate = useNavigate();
  const [showCreate, setshowCreate] = useState(false);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const dothat = () => {
    settitle("");
    setprice(0);
  };

  return (
    <div className="createParent">
      <header className="navheader">
        <p>My expenses</p>
        <div className="newdiv">
          <p>Shehab</p>
          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312331/shehab/imgonline-com-ua-resize-3ZuHiPgjVl_oimt2k.png"
            alt=""
          />
        </div>
      </header>

      <aside className="aside">
        <div className="components-aside">
          <ul>
            <li>
              <a href="/Homeresult"> Home </a>
            </li>

            <li>
              <a
                onClick={() => {
                  setshowCreate(true);
                }}
              >
                Create
              </a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </aside>

      {showCreate && (
        <main className="mainCon">
          <input
            onChange={(eo) => {
              settitle(eo.target.value);
            }}
            type="text"
            value={title}
            placeholder="Amount"
          />

          <input
            onChange={(eo) => {
              setprice(Number(eo.target.value));
            }}
            type="number"
            placeholder="$"
            value={price}
          />

          <button
            onClick={(eo) => {
              eo.preventDefault();
              fetch("http://localhost:3100/mydata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, price }),
              }).then(() => {
                navigate("/");
              });

              dothat();
            }}
          >
            submit
          </button>
        </main>
      )}
    </div>
  );
};

export default Create;
