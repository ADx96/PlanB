import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { portfolioTheme } from "common/theme/portfolio";
import ResetCSS from "common/assets/css/style";
import WorkSection from "containers/Charity/WorkSection";
import PaymentSection from "containers/Hosting/Payment";
import Typewriter from "typewriter-effect";
import CallToAction from "containers/HostingModern/CallToAction";
import Logo from "common/components/UIElements/Logo";
import Faq from "containers/AppClassic/Faq";
import AppSlider from "containers/AppClassic/AppSlider";
import Banner from "containers/Ride/Banner";
import LogoImageAlt from "common/assets/image/portfolio/logo-alt.png";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/Portfolio/portfolio.style";
import {
  GlobalStyle2,
  AppWrapper,
  ConditionWrapper,
} from "containers/App/app.style";
import Navbar from "containers/Portfolio/Navbar";
import Footer from "containers/AppModern/Footer";
import FeatureSlider from "containers/App/FeatureSlider";
import FeatureSliderTwo from "containers/App/FeatureSliderTwo";
import TestimonialSection from "../containers/App/Testimonial";
import { WriterContainer } from "common/assets/css/extraStyles";

const HomePage = () => {
  function getSize() {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }

  function useWindowSize() {
    let [windowSize, setWindowSize] = useState(getSize());

    function handleResize() {
      setWindowSize(getSize());
    }

    useEffect(() => {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowSize;
  }
  const size = process.browser && useWindowSize();
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
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
        <GlobalStyle2 />
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
          <WriterContainer>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello World!")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Hello !")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Hello !")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Hello !")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Hello !")
                  .pauseFor(4000)
                  .deleteAll()
                  .start();
              }}
            />
          </WriterContainer>
          <Banner />
          <WorkSection />
          <ConditionWrapper id="keyfeature">
            {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <PaymentSection />
          <AppSlider />
          <AppWrapper>
            <TestimonialSection />
          </AppWrapper>
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default HomePage;
