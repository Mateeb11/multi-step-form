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
        object.price <= 10 && (object.price *= 10);
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
    // console.log(findAddOns(addOns, e.target.id));
    if (findAddOns(addOns, e.target.id)) {
      let arr = [...addOns];
      arr = arr.filter((addOns) => addOns.title != e.target.id);

      setAddOns([...arr]);
    } else {
      let addOnPrice = 1;

      setAddOns([...addOns, { title: e.target.id, price: addOnPrice }]);
    }
  };

  console.log(addOns);

  return (
    <>
      <Form
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      >
        <Box id="Online service" onClick={addOnsHandler}>
          <div className={classes.checkbox}>
            <img src={checkmark} alt="" width={13} height={13} />
          </div>
        </Box>
      </Form>
    </>
  );
}
