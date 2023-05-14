import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";
import Plan from "./Form/Plan";
import Steps from "./Steps/Steps";
import Navigation from "./Steps/navigation";

export default function Content() {
  const [step, setStep] = useState(2);

  const [info, setInfo] = useState({ Name: "", Email: "", Number: "" });
  const [isInfoFormValid, setIsInfoFormValid] = useState({
    isSubmitted: false,
    isValid: false,
  });

  const [plan, setPlan] = useState({ selectedPlan: "Arcade", time: "Monthly" });

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
        {step === 2 && <Plan plan={plan} setPlan={setPlan} />}
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
