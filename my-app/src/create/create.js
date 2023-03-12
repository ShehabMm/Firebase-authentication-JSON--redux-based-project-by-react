// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./create.css";
// import emailjs from '@emailjs/browser';


// const Create = () => {
//   const navigate = useNavigate();
//   const [showCreate, setshowCreate] = useState(false);
//   const [title, settitle] = useState("");
//   const [price, setprice] = useState(0);
//   const dothat = () => {
//     settitle("");
//     setprice(0);
//   };

//   const [username, setusername] = useState("");
//   const [useremail, setuseremail] = useState("");
//   const [message, setmessage] = useState("");





//   let sendEmail = (e) => {
//     e.preventDefault();
//     const forminfo = {
//       from_name: username,
//       user_name: username,
//       user_email: useremail,
//       message: message
//     }


//     emailjs.send('service_um2xtn9', 'template_b2vjsa5', forminfo, '7LBu4kSgGpdIHFdd7')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//   };

//   return (
//     <div className="createParent">
//       <header className="navheader">
//         <p>My expenses</p>
//         <div className="newdiv">
//           <p>Shehab</p>
//           <img
//             src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312331/shehab/imgonline-com-ua-resize-3ZuHiPgjVl_oimt2k.png"
//             alt=""
//           />
//         </div>
//       </header>

//       <aside className="aside">
//         <div className="components-aside">
//           <ul>
//             <li>
//               <a href="/Homeresult"> Home </a>
//             </li>

//             <li>
//               <a href="" onClick={() => {
//                 setshowCreate(true);
//               }}
//               >
//                 Create
//               </a>
//             </li>
//             <li>
//               <a href="">Profile</a>
//             </li>
//             <li>
//               <a href="">Settings</a>
//             </li>
//             <li>
//               <a href="">Logout</a>
//             </li>
//           </ul>
//         </div>
//       </aside>

//         <main className="mainCon">
//           {/* <input
//             onChange={(eo) => {
//               settitle(eo.target.value);
//             }}
//             type="text"
//             value={title}
//             placeholder="Amount"
//           />

//           <input
//             onChange={(eo) => {
//               setprice(Number(eo.target.value));
//             }}
//             type="number"
//             placeholder="$"
//             value={price}
//           />

//           <button
//             onClick={(eo) => {
//               eo.preventDefault();
//               fetch("http://localhost:3100/mydata", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ title, price }),
//               }).then(() => {
//                 navigate("/Homeresult");
//               });

//               dothat();
//             }}
//           >
//             submit
//           </button> */}
//  */}


//           <form  >

//             <h1>Contact Me</h1>
//             <input className="goooo" onChange={(eo) => {

//               setusername(eo.target.value)




//             }} type="text" placeholder="your fullname" required />
//             <label htmlFor="email">Your E-mail</label>

//             <input className="goooo"  onChange={(eo) => {

//               setuseremail(eo.target.value)

//             }} type="text" placeholder="your email" required />


//             <input className="goooo" onChange={(eo) => {

//               setmessage(eo.target.value)

//             }} type="text" placeholder="write your message here..." required />


//             <button onClick={(e) => {
              
//               sendEmail(e)

//             }}>send a message</button>

//           </form>


//         </main>
    
//     </div>
//   );
// };

// export default Create;
