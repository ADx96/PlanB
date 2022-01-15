import React from "react";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Logo from "common/components/UIElements/Logo";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from "./footer.style";

import { footer } from "common/data/AppClassic";

const Footer = () => {
  const { logo, menu, widgets } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        {/* End of footer widgets area */}
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo}
            title="App Classic"
          />
          <Menu>
            {menu.map((item) => (
              <MenuItem key={`footer-link${item.id}`}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright {year} PlanB 2 0 0 2 2</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
