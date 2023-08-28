import { IMG_FOOD } from "../constant";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AboutProject from "./AboutProject";

const myStyle={
  backgroundImage:
  `url(${IMG_FOOD })`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const About = () => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(false);

  return (
    <div style={myStyle}>
      <h1>Welcome to World of Food</h1>
      <h4>"feel the taste"</h4>
      
      {show ? (
        <>
          <Link to={"/about"}>
            <button
              onClick={() => setShow(false)}
            >
              Hide My Profile
            </button>
          </Link>
          <Outlet />
        </>
      ) : (
        <Link to={"profile"}>
          <button
            onClick={() => setShow(true)}
          >
            Show My Profile
          </button>
        </Link>
      )}
      {detail ? (
        <button onClick={() => 
          setDetail(false)}>Show Project Detail</button>
      ) : (
        <button onClick={() => 
          setDetail(true)}>Hide Project Detail</button>
      )}

      {detail && <AboutProject/> }
      </div>
  );
};

export default About;
