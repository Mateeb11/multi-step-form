import { useState } from "react";
import classes from "./Info.module.scss";

export default function Info({ info, setInfo }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  const formSubmitHandler = () => {
    setIsFormSubmited(true);
  };
  return (
    <>
      <label htmlFor="">Name</label>
      <input
        type="name"
        name="name"
        id=""
        onChange={(e) => {
          if (e.target.value === "") {
            setIsNameValid(false);
          } else {
            setIsNameValid(true);
          }
          setInfo({ ...info, Name: e.target.value });
        }}
      />
      {!isNameValid && isFormSubmited && <p>Name is invalid</p>}
      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        id=""
        onChange={(e) => {
          setInfo({ ...info, Email: e.target.value });
        }}
      />
      <label htmlFor="">Phone Number</label>
      <input
        type="number"
        name="number"
        id=""
        onChange={(e) => {
          setInfo({ ...info, Number: e.target.value });
        }}
      />
      <button onClick={formSubmitHandler}>aklsdklas</button>
    </>
  );
}
