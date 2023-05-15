import { useEffect } from "react";

import classes from "./AddOns.module.scss";

import Box from "../UI/Box";
import Form from "../UI/Form";

import checkmark from "../../../assets/images/icon-checkmark.svg";

const findAddOns = (arr, text) => {
  return arr.find((o) => o.title === text);
};

export default function AddOns({ addOns, setAddOns, planTime }) {
  //when the user go back and chnage the plan time , this useEffect will make sure the user previous chioces price change
  useEffect(() => {
    let arr = [...addOns];
    if (planTime === "Yearly") {
      arr.forEach((object) => {
        object.price < 10 && (object.price *= 10);
      });
      setAddOns([...arr]);
    } else if (planTime === "Monthly") {
      arr.map((object) => {
        object.price >= 10 && (object.price /= 10);
      });
      setAddOns([...arr]);
    }
  }, []);

  const addOnsHandler = (e) => {
    if (findAddOns(addOns, e.target.id)) {
      let arr = [...addOns];
      arr = arr.filter((addOns) => addOns.title != e.target.id);

      setAddOns([...arr]);
    } else {
      let addOnPrice = e.target.id === "Online service" ? 1 : 2;

      setAddOns([...addOns, { title: e.target.id, price: addOnPrice }]);
    }
  };

  return (
    <>
      <Form
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      >
        <Box
          id="Online service"
          onClick={addOnsHandler}
          className={`${classes.box} ${
            findAddOns(addOns, "Online service") && classes.selectedBox
          }`}
        >
          <div className={classes.container}>
            <div
              className={`${classes.checkbox} ${
                findAddOns(addOns, "Online service") && classes.checked
              }`}
            >
              <img src={checkmark} alt="" width={13} height={13} />
            </div>
            <div className={classes.info}>
              <p>Online service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <p className={classes.price}>
            {planTime === "Monthly" ? "+$1/mo" : "+$10/yr"}
          </p>
        </Box>
        <Box
          id="Larger storage"
          onClick={addOnsHandler}
          className={`${classes.box} ${
            findAddOns(addOns, "Larger storage") && classes.selectedBox
          }`}
        >
          <div className={classes.container}>
            <div
              className={`${classes.checkbox} ${
                findAddOns(addOns, "Larger storage") && classes.checked
              }`}
            >
              <img src={checkmark} alt="" width={13} height={13} />
            </div>
            <div className={classes.info}>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <p className={classes.price}>
            {planTime === "Monthly" ? "+$2/mo" : "+$20/yr"}
          </p>
        </Box>
        <Box
          id="Customizable Profile"
          onClick={addOnsHandler}
          className={`${classes.box} ${
            findAddOns(addOns, "Customizable Profile") && classes.selectedBox
          }`}
        >
          <div className={classes.container}>
            <div
              className={`${classes.checkbox} ${
                findAddOns(addOns, "Customizable Profile") && classes.checked
              }`}
            >
              <img src={checkmark} alt="" width={13} height={13} />
            </div>
            <div className={classes.info}>
              <p>Customizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <p className={classes.price}>
            {planTime === "Monthly" ? "+$2/mo" : "+$20/yr"}
          </p>
        </Box>
      </Form>
    </>
  );
}
