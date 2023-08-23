import { IMG_FOOD } from "../constant";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
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
      <h1>Welcome to World of Food</h1>
      <h4>"feel the taste"</h4>
      <img src={IMG_FOOD} alt="Food Image" />
    </>
  );
};

export default About;
