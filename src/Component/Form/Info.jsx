import validator from "validator";

import { useState } from "react";

import classes from "./Info.module.scss";

import Input from "../UI/Input";

export default function Info({ info, setInfo, setStep }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(
    "This field is required"
  );
  const nameHandler = (e) => {
    if (e.target.value === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
      setInfo({ ...info, Name: e.target.value });
    }
  };

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(nameErrorMessage);
  const emailHandler = (e) => {
    if (validator.isEmail(e.target.value)) {
      setIsEmailValid(true);
      setInfo({ ...info, Email: e.target.value });
    } else {
      if (e.target.value === "") {
        setEmailErrorMessage(nameErrorMessage);
      } else {
        setEmailErrorMessage("Incorrect email");
      }
      setIsEmailValid(false);
    }
  };

  const [isNumberValid, setIsNumberValid] = useState(false);
  const [numberErrorMessage, setNumberErrorMessage] =
    useState(nameErrorMessage);
  const numberHandler = (e) => {
    if (validator.isMobilePhone(e.target.value)) {
      setIsNumberValid(true);
      setInfo({ ...info, Number: e.target.value });
    } else {
      if (e.target.value === "") {
        setNumberErrorMessage(nameErrorMessage);
      } else {
        setNumberErrorMessage("Incorrect phone number");
      }
      setIsNumberValid(false);
    }
  };

  const formSubmitHandler = () => {
    setIsFormSubmited(true);

    if (isEmailValid && isNameValid && isNumberValid) {
      setStep(2);
    }
  };
  return (
    <>
      <Input
        title={"Name"}
        type={"text"}
        name={"name"}
        onChange={nameHandler}
      />
      <Input
        title={"Email"}
        type={"email"}
        name={"email"}
        onChange={emailHandler}
      />
      <Input
        title={"Phone Number"}
        type={"number"}
        name={"phone number"}
        onChange={numberHandler}
      />

      <button onClick={formSubmitHandler}>aklsdklas</button>
    </>
  );
}
