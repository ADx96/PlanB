import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "common/components/Navbar";
import Button from "common/components/Button";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import { MENU_ITEMS } from "common/data/Portfolio/data";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";

const Navbar = ({ navbarStyle, button, row, menuWrapper }) => {
  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...menuWrapper}>
            <ScrollSpyMenu className="main_menu" menuItems={MENU_ITEMS} />
            <Link href="#">
              <a
                className="btn btn-theme wow fadeInUp"
                data-wow-duration="3s"
                data-wow-delay="0.5s"
                href="/#"
                data-text="Coming Soon"
              >
                <span>C</span>
                <span>o</span>
                <span>m</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>S</span>
                <span>o</span>
                <span>o</span>
                <span>n</span>
              </a>
            </Link>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["120px", "130px"],
  },
  button: {
    type: "button",
    fontSize: "16px",
    pl: "0",
    pr: "0",
    colors: "primary",
    minHeight: "auto",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
