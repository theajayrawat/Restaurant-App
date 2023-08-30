import { useSelector } from "react-redux";
import { IMG_LOGO } from "../constant";
import { Link } from "react-router-dom";

const Title = () => (
  <>
    <img className="logo" alt="logo" src={IMG_LOGO} />
    <h2 className="title">YUM YUM...</h2>
  </>
);

const Header = () => {
  const carItems=useSelector(store=>store.cart.items)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart {carItems.length!=0 ?"+" + carItems.length : ""}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
