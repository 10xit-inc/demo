import { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import Button from "../button";
import "./navBar.scss";

interface Props {
  toggle: () => void;
  mintDialog: () => void;
}

const NavBar = (props: Props) => {
  const { toggle, mintDialog } = props;
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <IconContext.Provider value={{ color: "#1b1b1b" }}>
      <nav className={scrollNav ? "scroll-nav" : ""}>
        <div className="nav-container">
          <LinkS className="nav-logo" to="/" onClick={toggleHome}>
            <img src="../../demo/assets/logo.png" />
          </LinkS>
          <div className="nav-button">
            <Button onClick={mintDialog} backgroundColor="#fff" color="#2834DA">
              Mint
            </Button>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default NavBar;
