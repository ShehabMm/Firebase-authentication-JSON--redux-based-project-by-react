import React from "react";
import "../style.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";
import { useState } from "react";

const TheContent = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showMyTest, setShowMyTest] = useState(true);
  const [closemodel, setclosemodel] = useState("")
  const cls = () => {
    setShowMyTest(false)
  }

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312330/shehab/SL-111719-25140-24-removebg-preview_chrjqn.png"
              width="150px"
              height="80px"
              alt=""
            />
            <ul>
              <li>
                <button
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        console.log("don");
                        navigate("/");
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                >
                  Sign out
                </button>
              </li>






              <li>
                <a onClick={() => { setShowMyTest(true)
                
                
                
                }} href="/">home</a>
              </li>
              <li>
                <a onClick={(eo) => {
              



                }} href="#thatsmywork">  Projects
                </a>
              </li>
              <li>
                <a href="https://courageous-froyo-50292c.netlify.app/">
                  portfolio
                </a>
              </li>
              <li>
                <a href="#fo">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-text">
          <p>Front-end-developer</p>
          <h1>
            Hi, I'm <span>shehab</span> Eldin
          </h1>
          <br />
          <div className="img1">
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312330/shehab/bannon-morrissy-RxiAV5LC-ww-unsplash_nf7xns.jpg"
              height="330px"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* .................about me................ */}
      <div id="about">
        <div className="container">
          <div className="row">
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312336/shehab/albert-dera-ILip77SbmOE-unsplash_bodom0.jpg"
              height="400px"
              alt=""
            />
            <div className="about-col-2">
              <h1 className="sub-title">about me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                voluptatem architecto neque incidunt ipsam facere vero. Atque
                dolore deleniti officia architecto, rem libero
              </p>
              <div className="tab-titles">
                <p className="tab-links">skills</p>
                <p className="tab-links">experience</p>
                <p className="tab-links">education</p>
              </div>
              <div className="tab-contents active-link">
                <ul>
                  <li>
                    <span>ui?ux</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>web development</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>App development</span>
                    <br />
                    building anderiod
                  </li>
                </ul>
              </div>
              <div className="tab-contents">
                <ul>
                  <li>
                    <span>ui?ux</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>web development</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>App development</span>
                    <br />
                    yees anderiod
                  </li>
                </ul>
              </div>
              <div className="tab-contents">
                <ul>
                  <li>
                    <span>ui?ux</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>web development</span>
                    <br />
                    designing web interfaces
                  </li>
                  <li>
                    <span>App development</span>
                    <br />
                    ddddddd anderiod
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <h1>My Services</h1>
        <div className="container-3">
          <div className="column">
            <span>➀</span>
            <h2>web deign</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              praesentium?
            </p>
            <a href="">learn more</a>
          </div>
          <div className="column">
            <span>➁</span>
            <h2>web deign</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              praesentium?
            </p>
            <a href="">learn more</a>
          </div>
          <div className="column">
            <span>➂</span>
            <h2>web deign</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              praesentium?
            </p>
            <a href="">learn more</a>
          </div>
        </div>
      </div>

      {/* another section about works */}
      <br />
      <h1 className="isol" id="thatsmywork">my work</h1>

      <div className="section-4">

        <div className="imgContainer first">

          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312776/shehab/ecommerce_1_ix2xa3.png" alt=""
          />

        </div>


        <div className="imgContainer">
          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312775/shehab/bridge-g8e80d1dcc_1920_gadeug.jpg"
            alt=""
          />

        </div>


        <div className="imgContainer">

          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312774/shehab/shoes_modi_soewtu.png"
            alt=""
          />


        </div>

        <div className="imgContainer">
          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312774/shehab/imgonline-com-ua-resize-j79nzMgdFfd_aescer.png"
            alt=""
          />


        </div>
      </div>

      {/* section 5 the last  */}

      <div className="background" id="fo">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close" />
                <div className="screen-header-button maximize" />
                <div className="screen-header-button minimize" />
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>me</span>
                </div>
                <p className="app-contact">CONTACT INFO : +20 1222372437</p>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <p
                      className="app-form-control"
                      placeholder="NAME"
                      defaultValue="Shehab Eldin"
                    >
                      {" "}
                      Shehab Eldin
                    </p>
                  </div>
                  <div className="app-form-group">
                    <p className="app-form-control" placeholder="">
                      shehab.mm@gmail.com
                    </p>
                  </div>
                  <div className="app-form-group">
                    <p
                      className="app-form-control"
                      placeholder=""
                      style={{ color: "red", textTransform: "lowercase" }}
                    >
                      +20 1222372437
                    </p>
                  </div>
                  <div className="app-form-group message">
                    <p className="app-form-control" placeholder="">
                      Welcome sir
                    </p>
                  </div>
                  <div className="app-form-group buttons"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </>
  );
};

export default TheContent;
