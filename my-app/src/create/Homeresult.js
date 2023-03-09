import React, { useEffect, useState } from 'react';
import "./create.css";

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



    </div>



  );
}

export default Homeresult;
