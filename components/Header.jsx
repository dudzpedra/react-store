import Navbar from "./Navbar";
import s from "../styles/Header.module.css";

const Header = () => {
  return (
    <div style={s}>
      <header className="container">
        <h3>This could be your store</h3>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
