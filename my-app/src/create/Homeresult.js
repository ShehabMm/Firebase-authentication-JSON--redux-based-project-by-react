import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./create.css";
// import Create from "./create"

// const navigate = useNavigate();
const Homeresult = () => {

  const [mydata, showmydata] = useState([])

  useEffect(() => {

    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => showmydata(data))
  }, []);

  return (
    <div className='showdata'>
      {mydata.map((item) => {

        return <ul>   <li>{item.title} </li>
          <li>${item.price} </li>
        </ul>

      })}

      {/* if (mydata===([])) {
        navigate("/")
      } */}

    </div>



  );
}

export default Homeresult;
