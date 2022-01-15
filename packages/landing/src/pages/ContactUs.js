import React from "react";
import ContactTwo from "common/components/contactTwo";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { portfolioTheme } from "common/theme/portfolio";
import ResetCSS from "common/assets/css/style";
import Logo from "common/components/UIElements/Logo";
import LogoImageAlt from "common/assets/image/portfolio/logo-alt.png";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/Portfolio/portfolio.style";
import Navbar from "containers/Portfolio/Navbar";
import Footer from "containers/AppModern/Footer";
const ContactUs = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Head>
        <title>landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#ec5555" />
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <div style={{ textAlign: "center", marginTop: "20px " }}>
          <Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={{ maxWidth: ["120px", "130px"] }}
          />
        </div>
        <ContactTwo />
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default ContactUs;
