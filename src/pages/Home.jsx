import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/png/Logo.png";

const Home = () => {
  return (
    <div className="homeMainDiv flex justify-center flex-row">
      <main>
        <div className="profileText">
          <TypeAnimation
            sequence={[
              "I am web developer",
              1000,
              "I am web designer",
              1000,
              "I am web coder",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "2em" }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        <div className="profileImage">
          <img src={profileImage} width="350px" alt="dori" />
        </div>
      </main>
    </div>
  );
};

export default Home;
