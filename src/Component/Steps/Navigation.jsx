import classes from "./Navigation.module.scss";

export default function Navigation({
  step,
  setStep,
  isFormValid,
  setIsFormValid,
  confirm,
  setConfirm,
}) {
  const nextHandler = () => {
    if (step === 1) {
      setIsFormValid({ ...isFormValid, isSubmitted: true });
      if (isFormValid.isValid) {
        setStep(step + 1);
      }
    } else if (step === 4) {
      setConfirm(true);
    } else {
      setStep(step + 1);
    }
  };

  const backHandler = () => {
    setStep(step - 1);
  };
  return (
    <>
      {!confirm && (
        <div className={classes.buttons}>
          <button
            className={`${classes.next} ${step === 4 && classes.confirm}`}
            onClick={nextHandler}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
          {step !== 1 && (
            <button className={classes.back} onClick={backHandler}>
              Go Back
            </button>
          )}
        </div>
      )}
    </>
  );
}
