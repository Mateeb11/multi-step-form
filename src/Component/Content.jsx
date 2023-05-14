import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";
import Plan from "./Form/Plan";
import Steps from "./Steps/Steps";

export default function Content() {
  const [isInfoFormValid, setIsInfoFormValid] = useState({
    isSubmitted: false,
    isValid: false,
  });

  const [step, setStep] = useState(1);

  const stepHandler = () => {
    if (step === 1) {
      setIsInfoFormValid({ ...isInfoFormValid, isSubmitted: true });
      if (isInfoFormValid.isValid) {
        setStep(step + 1);
      }
    }
  };

  return (
    <>
      <main className={classes.container}>
        <Steps step={step} />

        {step === 1 && (
          <Info
            isInfoFormValid={isInfoFormValid}
            setIsInfoFormValid={setIsInfoFormValid}
          />
        )}
        {step === 2 && <Plan />}
      </main>
      <div className={classes.buttons}>
        <button
          className={`${classes.next} ${step === 4 && classes.confirm}`}
          onClick={stepHandler}
        >
          {step === 4 ? "Confirm" : "Next Step"}
        </button>
        {step !== 1 && <button className={classes.back}>Go Back</button>}
      </div>
    </>
  );
}
