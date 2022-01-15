import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import ReactWOW from "react-wow";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "./counter-style";

function Counter() {
  const classes = useStyles();

  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  );
  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.counterInner}
          spacing={6}
        >
          <Grid sm={4} xs={6} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3">+{countup(200, play)}M</Typography>
                <Typography component="p">
                  <i className="ion-ios-cloud-download-outline" />
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} xs={6} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3">+{countup(480, play)}M</Typography>
                <Typography component="p">
                  <i className="ion-ios-checkmark-circle-outline" />
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} xs={6} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3">+{countup(180, play)}M</Typography>
                <Typography component="p">
                  <i className="ion-ios-star-outline" />
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
