import { useState } from "react";

import classes from "./Plan.module.scss";

import Box from "../UI/Box";
import Form from "../UI/Form";

import arcadeImg from "../../../assets/images/icon-arcade.svg";
import advancedImg from "../../../assets/images/icon-advanced.svg";
import proImg from "../../../assets/images/icon-pro.svg";

export default function Plan() {
  return (
    <Form
      title="Select your plan"
      description=" You have the option of monthly or yearly billing."
      className={classes.form}
    >
      <Box className={classes.selected}>
        <img src={arcadeImg} alt="arcade controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Arcade</h3>
          <p className={classes.price}>$90/yr</p>
          <p className={classes.offer}>2 months free</p>
        </div>
      </Box>
      <Box>
        <img src={advancedImg} alt="small controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Advanced</h3>
          <p className={classes.price}>$90/yr</p>
          <p className={classes.offer}>2 months free</p>
        </div>
      </Box>
      <Box>
        <img src={proImg} alt="big controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Pro</h3>
          <p className={classes.price}>$90/yr</p>
          <p className={classes.offer}>2 months free</p>
        </div>
      </Box>
      <div className={classes.time}>
        <p>Monthly</p>
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider}></span>
        </label>
        <p>Yearly</p>
      </div>
    </Form>
  );
}
