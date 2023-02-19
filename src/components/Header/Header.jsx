import { Link } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Works from "../../pages/Works";
import Home from "../../pages/Home";
import "./Header.scss";
import Logo from "../../assets/svg/home.svg";
import WhatsApp from "../../assets/svg/whatsApp.svg";

const Header = () => {
  return (
    <div>
      <header className="mainHeader">
        <div className="mainHeaderDiv">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" width="50px" />
            </Link>
          </div>
          <div className="menuLinks">
            <li>
              <Link to="/" element={<Home />}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/works" element={<Works />}>
                Works
              </Link>
            </li>
            <li>
              <Link to="/about" element={<About />}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" element={<Contact />}>
                Contact
              </Link>
            </li>
          </div>

          <div className="whatsAppButton">
            <a href="https://wa.me/+355682041518" className="whatsAppLink">
              <img src={WhatsApp} alt="whatsApp" width="25px" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
