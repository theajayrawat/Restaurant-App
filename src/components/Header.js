import { IMG_LOGO } from "../constant";
import { Link } from "react-router-dom";

const Title = () => (
  <>
    <img className="logo" alt="logo" src={IMG_LOGO} />
    <h2 className="title">YUM YUM...</h2>
  </>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
