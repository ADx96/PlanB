import React from "react";
import Container from "common/components/UI/Container";
import FooterArea, { MenuArea, CopyrightText } from "./footer.style";
import Icons from "./icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        {/* End of footer widgets area */}
        <MenuArea>
          <Icons />
          <CopyrightText>Copyright {year} PlanB </CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
