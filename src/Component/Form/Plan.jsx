import { useState } from "react";

import classes from "./Plan.module.scss";

import Box from "../UI/Box";
import Form from "../UI/Form";

import arcadeImg from "../../../assets/images/icon-arcade.svg";
import advancedImg from "../../../assets/images/icon-advanced.svg";
import proImg from "../../../assets/images/icon-pro.svg";

export default function Plan({ plan, setPlan }) {
  const planHandler = (e) => {
    let planPrice = 0;
    if (e.target.id === "1") {
      plan.time === "Monthly" ? (planPrice = 9) : (planPrice = 90);
      setPlan({ ...plan, selectedPlan: "Arcade", price: planPrice });
    } else if (e.target.id === "2") {
      plan.time === "Monthly" ? (planPrice = 12) : (planPrice = 120);
      setPlan({ ...plan, selectedPlan: "Advanced", price: planPrice });
    } else if (e.target.id === "3") {
      plan.time === "Monthly" ? (planPrice = 15) : (planPrice = 150);
      setPlan({ ...plan, selectedPlan: "Pro", price: planPrice });
    }
  };

  const switcherHandler = () => {
    if (plan.time === "Monthly") {
      setPlan({ ...plan, time: "Yearly", price: plan.price * 10 });
    } else {
      setPlan({ ...plan, time: "Monthly", price: plan.price / 10 });
    }
  };

  return (
    <Form
      title="Select your plan"
      description=" You have the option of monthly or yearly billing."
      className={classes.form}
    >
      <div className={classes.plans}>
        <Box
          className={`${classes.box} ${
            plan.selectedPlan === "Arcade" && classes.selectedBox
          }`}
          onClick={planHandler}
          id="1"
        >
          <img src={arcadeImg} alt="arcade controller icon" />
          <div className={classes.info}>
            <h3 className={classes.title}>Arcade</h3>
            <p className={classes.price}>
              {plan.time === "Monthly" ? "$9/mo" : "$90/yr"}
            </p>
            {plan.time === "Yearly" && (
              <p className={classes.offer}>2 months free</p>
            )}
          </div>
        </Box>
        <Box
          className={`${classes.box} ${
            plan.selectedPlan === "Advanced" && classes.selectedBox
          }`}
          id="2"
          onClick={planHandler}
        >
          <img src={advancedImg} alt="small controller icon" />
          <div className={classes.info}>
            <h3 className={classes.title}>Advanced</h3>
            <p className={classes.price}>
              {plan.time === "Monthly" ? "$12/mo" : "$120/yr"}
            </p>
            {plan.time === "Yearly" && (
              <p className={classes.offer}>2 months free</p>
            )}
          </div>
        </Box>
        <Box
          className={`${classes.box} ${
            plan.selectedPlan === "Pro" && classes.selectedBox
          }`}
          id="3"
          onClick={planHandler}
        >
          <img src={proImg} alt="big controller icon" />
          <div className={classes.info}>
            <h3 className={classes.title}>Pro</h3>
            <p className={classes.price}>
              {plan.time === "Monthly" ? "$15/mo" : "$150/yr"}
            </p>
            {plan.time === "Yearly" && (
              <p className={classes.offer}>2 months free</p>
            )}
          </div>
        </Box>
      </div>
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
