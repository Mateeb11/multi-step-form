import classes from "./Confirmation.module.scss";

import Form from "../UI/Form";

import thankYou from "../../../assets/images/icon-thank-you.svg";

export default function Confirmation() {
  return (
    <>
      <Form
        title="Thank you!"
        description="Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com."
        className={classes.thankyou}
      >
        <img src={thankYou} alt="" />
      </Form>
    </>
  );
}
