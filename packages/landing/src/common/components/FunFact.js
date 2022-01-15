import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible === true) {
      setCounter(true);
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    delay={1}
                    duration={3}
                    end={counter === true ? 6400 : 0}
                  />
                </VisibilitySensor>
              </h3>
              <p>Downloads</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    delay={1}
                    duration={3}
                    end={counter === true ? 6400 : 0}
                  />
                </VisibilitySensor>
              </h3>
              <p>Likes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    delay={1}
                    duration={3}
                    end={counter === true ? 900 : 0}
                  />
                </VisibilitySensor>
              </h3>
              <p>5 Star Rating</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    delay={1}
                    duration={3}
                    end={counter === true ? 1000 : 0}
                  />
                </VisibilitySensor>
              </h3>
              <p>FreeLancers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
