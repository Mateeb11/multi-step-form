import classes from "./Steps.module.scss";

export default function Steps() {
  return (
    <>
      <section className={classes.container}>
        <div className={`${classes.step} ${classes.selected}`}>
          <p>1</p>
        </div>
        <div className={classes.step}>
          <p>2</p>
        </div>
        <div className={classes.step}>
          <p>3</p>
        </div>
        <div className={classes.step}>
          <p>4</p>
        </div>
      </section>
    </>
  );
}
