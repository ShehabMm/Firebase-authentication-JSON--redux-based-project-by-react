import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/config"

const AllTasks = () => {

  const [value, loading, error] = useCollection(collection(db, "newboshehab"));
  if (loading) {
    return (<h1>sorry loading</h1>)
  }

  if (error) {
    return (<h1>sorry error</h1>)
  }

  if (value) {
    return (<div className='bo'>
      {
        value.docs.map((item, index) => {
          return (



            <div className="yourtask">
              <h1>{item.data().title}</h1>
              <ul >  
                {item.data().details.map((item) => {

                  return(<li>{item} </li>)

                })} 
              </ul>
              <p>sasa</p>
            </div>



          )
        })
      }
    </div>)






  }



};

export default AllTasks;




