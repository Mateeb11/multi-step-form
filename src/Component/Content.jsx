import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";
import Plan from "./Form/Plan";
import AddOns from "./Form/AddOns";
import Summry from "./Form/Summary";
import Steps from "./Steps/Steps";
import Navigation from "./Steps/navigation";

export default function Content() {
  const [step, setStep] = useState(4);

  const [info, setInfo] = useState({ Name: "", Email: "", Number: "" });
  const [isInfoFormValid, setIsInfoFormValid] = useState({
    isSubmitted: false,
    isValid: false,
  });

  const [plan, setPlan] = useState({
    selectedPlan: "Arcade",
    time: "Monthly",
    price: 9,
  });

  const [addOns, setAddOns] = useState([
    { title: "Online service", price: 1 },
    { title: "Larger storage", price: 2 },
  ]);

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
        {step === 3 && (
          <AddOns addOns={addOns} setAddOns={setAddOns} planTime={plan.time} />
        )}
        {step === 4 && <Summry plan={plan} addOns={addOns} setStep={setStep} />}
        <Navigation
          step={step}
          setStep={setStep}
          isFormValid={isInfoFormValid}
          setIsFormValid={setIsInfoFormValid}
        />
      </main>
    </>
  );
}
