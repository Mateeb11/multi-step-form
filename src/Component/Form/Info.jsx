import validator from "validator";

import { useState } from "react";

import classes from "./Info.module.scss";

import Input from "../UI/Input";
import Form from "../UI/Form";

export default function Info({ setIsInfoFormValid, isInfoFormValid }) {
  const [info, setInfo] = useState({ Name: "", Email: "", Number: "" });

  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(
    "This field is required"
  );
  const nameHandler = (e) => {
    if (e.target.value === "") {
      setIsNameValid(false);
      setIsInfoFormValid({ ...isInfoFormValid, isValid: false });
    } else {
      setIsNameValid(true);
      setInfo({ ...info, Name: e.target.value });
      if (isEmailValid && isNumberValid) {
        setIsInfoFormValid({ ...isInfoFormValid, isValid: true });
      }
    }
  };

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(nameErrorMessage);
  const emailHandler = (e) => {
    if (validator.isEmail(e.target.value)) {
      setIsEmailValid(true);
      setInfo({ ...info, Email: e.target.value });
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

  const [isNumberValid, setIsNumberValid] = useState(false);
  const [numberErrorMessage, setNumberErrorMessage] =
    useState(nameErrorMessage);
  const numberHandler = (e) => {
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
        placeholder={"e.g Stephen King"}
        onChange={nameHandler}
      />
      <Input
        title={"Email"}
        type={"email"}
        name={"email"}
        placeholder={"e.g stephenking@lorem.com"}
        onChange={emailHandler}
      />
      <Input
        title={"Phone Number"}
        type={"number"}
        name={"phone number"}
        placeholder={"e.g +966 123456789"}
        onChange={numberHandler}
      />
    </Form>
  );
}
