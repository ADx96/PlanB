import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Pricing Tables"
          titleText={`Choose Pricing Plans Which \n Suits Your Needs`}
        />

        <div id="yearly">
          <Col lg={4} >
            <div className="pricing-one__single">
              <div className="pricing-one__circle"></div>
              <div className="pricing-one__inner">
                <p>Ultimate Pack</p>
                <h3>$99.00</h3>
                <ul className="list-unstyled pricing-one__list">
                  <li>Extra features</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>Full access</li>
                </ul>
                <span>No hidden charges!</span>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
