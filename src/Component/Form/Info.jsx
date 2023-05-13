import validator from "validator";

import { useState } from "react";

import classes from "./Info.module.scss";

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
      <label htmlFor="">Name</label>
      <input type="name" name="name" id="" onChange={nameHandler} />
      {!isNameValid && isFormSubmited && <p>{nameErrorMessage}</p>}
      <label htmlFor="">Email</label>
      <input type="email" name="email" id="" onChange={emailHandler} />
      {!isEmailValid && isFormSubmited && <p>{emailErrorMessage}</p>}

      <label htmlFor="">Phone Number</label>
      <input type="number" name="number" id="" onChange={numberHandler} />
      {!isNumberValid && isFormSubmited && <p>{numberErrorMessage}</p>}

      <button onClick={formSubmitHandler}>aklsdklas</button>
    </>
  );
}
