import classes from "./Form.module.scss";

export default function Form({ title, description, children }) {
  return (
    <div className={classes.form}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}
