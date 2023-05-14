import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";
import Plan from "./Form/Plan";
import Steps from "./Steps/Steps";
import Navigation from "./Steps/navigation";

export default function Content() {
  const [info, setInfo] = useState({ Name: "", Email: "", Number: "" });
  const [isInfoFormValid, setIsInfoFormValid] = useState({
    isSubmitted: false,
    isValid: false,
  });

  const [step, setStep] = useState(1);

  return (
    <>
      <main className={classes.container}>
        <Steps step={step} />

        {step === 1 && (
          <Info
            isInfoFormValid={isInfoFormValid}
            setIsInfoFormValid={setIsInfoFormValid}
            info={info}
            setInfo={setInfo}
          />
        )}
        {step === 2 && <Plan />}
      </main>
      <Navigation
        step={step}
        setStep={setStep}
        isFormValid={isInfoFormValid}
        setIsFormValid={setIsInfoFormValid}
      />
    </>
  );
}
