import classes from "./Form.module.scss";

export default function Form({ title, description, className, children }) {
  return (
    <div className={`${classes.form} ${className}`}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      {children}
    </div>
  );
}
