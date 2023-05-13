import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";
import Plan from "./Form/Plan";
import Steps from "./Steps/Steps";

export default function Content() {
  const [info, setInfo] = useState({ Name: "", Email: "sajkdkj", Number: "" });
  const [step, setStep] = useState(1);

  return (
    <>
      <main className={classes.container}>
        <Steps step={step} />

        {step === 1 && <Info setInfo={setInfo} info={info} setStep={setStep} />}
        {step === 2 && <Plan />}
      </main>
    </>
  );
}
