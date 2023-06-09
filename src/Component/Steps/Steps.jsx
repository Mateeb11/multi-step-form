import classes from "./Steps.module.scss";

export default function Steps({ step }) {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.stepContainer}>
          <div className={`${classes.step} ${step === 1 && classes.selected}`}>
            <p>1</p>
          </div>
          <div className={classes.stepText}>
            <p>STEP 1</p>
            <span>YOUR INFO</span>
          </div>
        </div>
        <div className={classes.stepContainer}>
          <div className={`${classes.step} ${step === 2 && classes.selected}`}>
            <p>2</p>
          </div>
          <div className={classes.stepText}>
            <p>STEP 2</p>
            <span>SELECT PLAN</span>
          </div>
        </div>
        <div className={classes.stepContainer}>
          <div className={`${classes.step} ${step === 3 && classes.selected}`}>
            <p>3</p>
          </div>
          <div className={classes.stepText}>
            <p>STEP 3</p>
            <span>ADD-ONS</span>
          </div>
        </div>
        <div className={classes.stepContainer}>
          <div className={`${classes.step} ${step === 4 && classes.selected}`}>
            <p>4</p>
          </div>
          <div className={classes.stepText}>
            <p>STEP 4</p>
            <span>SUMMARY</span>
          </div>
        </div>
      </section>
    </>
  );
}
