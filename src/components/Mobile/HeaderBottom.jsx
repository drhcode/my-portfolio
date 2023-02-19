import "./HeaderBottom.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/svg/home.svg";
import worksIcon from "../../assets/svg/works.svg";
import aboutMe from "../../assets/svg/info.svg";
import contactMe from "../../assets/svg/talk.svg";

const HeaderBottom = () => {
  return (
    <div className="headerBottomMainDiv">
      <div className="icons">
        <Link to="/" className="home">
          <img src={homeIcon} width="34px" alt="Home" />
        </Link>
        <Link to="/works" className="works">
          <img src={worksIcon} width="34px" alt="works" />
        </Link>
        <Link to="/about" className="about">
          <img src={aboutMe} width="34px" alt="about" />
        </Link>
        <Link to="/contact" className="contact">
          <img src={contactMe} width="34px" alt="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottom;
