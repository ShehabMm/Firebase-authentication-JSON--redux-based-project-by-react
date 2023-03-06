import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import ReactLoading from "react-loading";
import React, { useState } from "react";
import AllTasks from "./allTasks";
import { useAuthState } from "react-firebase-hooks/auth";

const Newex = ({ cls, children }) => {
  const [user] = useAuthState(auth);

  const [details, setdetails] = useState("");
  const [data, setData] = useState([]);
  const [title, settitle] = useState("");
  const [showLoading, setshowLoading] = useState(false);
  const [taskAdded, settaskAdded] = useState(false);

  const allData = () => {
    if (!data.includes(details)) {
      data.push(details);
    }
    setdetails("");
  };

  return (
    <div className="anewform">
      <form>
        <span
          style={{ marginBottom: "20px" }}
          onClick={() => {
            cls();
          }}
        >
          x
        </span>

        <input
          value={title}
          type="text"
          placeholder="title"
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
        />

        <input
          value={details}
          type="text"
          placeholder="details"
          onChange={(eo) => {
            setdetails(eo.target.value);
          }}
        />

        <ul>
          {" "}
          {data.map((item) => {
            return <li key={item}> {item} </li>;
          })}{" "}
        </ul>

        <button
          onClick={(eo) => {
            eo.preventDefault();
            allData();
          }}
          style={{ color: "red", marginBottom: "30px" }}
        >
          add
        </button>

        <button
          onClick={async (eo) => {
            eo.preventDefault();
            setshowLoading(true);
            const num = Math.random();
            await setDoc(doc(db, user.uid, `${num}`), {
              completed: false,
              title: title,
              details: data,
              id: num,
            });

            setshowLoading(false);

            setData([]);
            settitle("");
            settaskAdded(true);

            setTimeout(() => {
              settaskAdded(false);
            }, 2000);
          }}
        >
          {showLoading ? (
            <ReactLoading type={"spin"} color={"red"} height={20} width={20} />
          ) : (
            "submit"
          )}{" "}
        </button>

        <h1 className="popUp" style={{ right: taskAdded ? "10px" : "-150vh" }}>
          Task added successfully
        </h1>

        <div>{children}</div>

        <AllTasks />
      </form>
    </div>
  );
};

export default Newex;
