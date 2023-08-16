import { IMG_LOGO } from "../constant";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
