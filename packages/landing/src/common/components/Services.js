import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Feature List"
          titleText={`Appton Providing You \n Best Features`}
        />
      </div>
    </section>
  );
};

export default Services;
