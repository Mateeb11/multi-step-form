import validator from "validator";

import { useState } from "react";

import classes from "./Info.module.scss";

import Input from "../UI/Input";
import Form from "../UI/Form";

export default function Info({
  setIsInfoFormValid,
  isInfoFormValid,
  info,
  setInfo,
}) {
  const [isNameValid, setIsNameValid] = useState(
    info.Name === "" ? false : true
  );
  const nameErrorMessage = "This field is required";
  const nameHandler = (e) => {
    setInfo({ ...info, Name: "" }); //cleaning the variable
    setInfo({ ...info, Name: e.target.value }); //settign the variable again
    if (e.target.value === "") {
      setIsNameValid(false);
      setIsInfoFormValid({ ...isInfoFormValid, isValid: false });
    } else {
      setIsNameValid(true);

      if (isEmailValid && isNumberValid) {
        setIsInfoFormValid({ ...isInfoFormValid, isValid: true });
      }
    }
  };

  const [isEmailValid, setIsEmailValid] = useState(
    info.Email === "" ? false : true // if the user already fill the data before and come back to the previous step the data the valid state will be true
  );
  const [emailErrorMessage, setEmailErrorMessage] = useState(nameErrorMessage);
  const emailHandler = (e) => {
    setInfo({ ...info, Email: "" });
    setInfo({ ...info, Email: e.target.value });
    if (validator.isEmail(e.target.value)) {
      setIsEmailValid(true);

      if (isNameValid && isNumberValid) {
        setIsInfoFormValid({ ...isInfoFormValid, isValid: true });
      }
    } else {
      if (e.target.value === "") {
        setEmailErrorMessage(nameErrorMessage);
      } else {
        setEmailErrorMessage("Incorrect email");
      }
      setIsEmailValid(false);
      setIsInfoFormValid({ ...isInfoFormValid, isValid: false });
    }
  };

  const [isNumberValid, setIsNumberValid] = useState(
    info.Number === "" ? false : true
  );
  const [numberErrorMessage, setNumberErrorMessage] =
    useState(nameErrorMessage);
  const numberHandler = (e) => {
    setInfo({ ...info, Number: "" });
    if (validator.isMobilePhone(e.target.value)) {
      setIsNumberValid(true);
      setInfo({ ...info, Number: e.target.value });
      if (isEmailValid && isNameValid) {
        setIsInfoFormValid({ ...isInfoFormValid, isValid: true });
      }
    } else {
      if (e.target.value === "") {
        setNumberErrorMessage(nameErrorMessage);
      } else {
        setNumberErrorMessage("Incorrect phone number");
      }
      setIsNumberValid(false);
      setIsInfoFormValid({ ...isInfoFormValid, isValid: false });
    }
  };

  const formSubmitHandler = () => {
    setIsInfoFormValid({ ...isInfoFormValid, isSubmitted: true });
  };
  return (
    <Form
      title={"Presonal info"}
      description={"Please provide your name, email address, and phone number."}
    >
      <Input
        title={"Name"}
        type={"text"}
        name={"name"}
        value={info.Name}
        placeholder={"e.g Stephen King"}
        onChange={nameHandler}
        errorMessage={nameErrorMessage}
        isValid={isNameValid}
        isSubmitted={isInfoFormValid.isSubmitted}
      />
      <Input
        title={"Email Address"}
        type={"email"}
        name={"email"}
        value={info.Email}
        placeholder={"e.g stephenking@lorem.com"}
        onChange={emailHandler}
        errorMessage={emailErrorMessage}
        isValid={isEmailValid}
        isSubmitted={isInfoFormValid.isSubmitted}
      />
      <Input
        title={"Phone Number"}
        type={"number"}
        name={"phone number"}
        value={info.Number}
        placeholder={"e.g +966 123456789"}
        onChange={numberHandler}
        errorMessage={numberErrorMessage}
        isValid={isNumberValid}
        isSubmitted={isInfoFormValid.isSubmitted}
      />
    </Form>
  );
}
