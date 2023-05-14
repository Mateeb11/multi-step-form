import classes from "./Form.module.scss";

export default function Form({ title, description, className, children }) {
  return (
    <div className={`${classes.form} ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}
