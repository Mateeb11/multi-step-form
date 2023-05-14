import { useState } from "react";

import classes from "./Plan.module.scss";

import Box from "../UI/Box";
import Form from "../UI/Form";

import arcadeImg from "../../../assets/images/icon-arcade.svg";
import advancedImg from "../../../assets/images/icon-advanced.svg";
import proImg from "../../../assets/images/icon-pro.svg";

export default function Plan({ plan, setPlan }) {
  const planHandler = (e) => {
    if (e.target.id === "1") {
      setPlan({ ...plan, selectedPlan: "Arcade" });
    } else if (e.target.id === "2") {
      setPlan({ ...plan, selectedPlan: "Advanced" });
    } else if (e.target.id === "3") {
      setPlan({ ...plan, selectedPlan: "Pro" });
    }
  };

  const switcherHandler = () => {
    if (plan.time === "Monthly") {
      setPlan({ ...plan, time: "Yearly" });
    } else {
      setPlan({ ...plan, time: "Monthly" });
    }
  };

  return (
    <Form
      title="Select your plan"
      description=" You have the option of monthly or yearly billing."
      className={classes.form}
    >
      <Box
        className={plan.selectedPlan === "Arcade" && classes.selected}
        onClick={planHandler}
        id="1"
      >
        <img src={arcadeImg} alt="arcade controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Arcade</h3>
          <p className={classes.price}>$90/yr</p>
          {plan.time === "Yearly" && (
            <p className={classes.offer}>2 months free</p>
          )}
        </div>
      </Box>
      <Box
        className={plan.selectedPlan === "Advanced" && classes.selected}
        id="2"
        onClick={planHandler}
      >
        <img src={advancedImg} alt="small controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Advanced</h3>
          <p className={classes.price}>$90/yr</p>
          {plan.time === "Yearly" && (
            <p className={classes.offer}>2 months free</p>
          )}
        </div>
      </Box>
      <Box
        className={plan.selectedPlan === "Pro" && classes.selected}
        id="3"
        onClick={planHandler}
      >
        <img src={proImg} alt="big controller icon" />
        <div className={classes.info}>
          <h3 className={classes.title}>Pro</h3>
          <p className={classes.price}>$90/yr</p>
          {plan.time === "Yearly" && (
            <p className={classes.offer}>2 months free</p>
          )}
        </div>
      </Box>
      <div className={classes.time}>
        <p className={plan.time === "Monthly" ? classes.checked : undefined}>
          Monthly
        </p>
        <label className={classes.switch}>
          <input
            type="checkbox"
            onClick={switcherHandler}
            defaultChecked={plan.time === "Yearly" && true}
          />
          <span className={classes.slider}></span>
        </label>
        <p className={plan.time === "Yearly" ? classes.checked : undefined}>
          Yearly
        </p>
      </div>
    </Form>
  );
}
