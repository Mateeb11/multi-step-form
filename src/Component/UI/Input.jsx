import classes from "./Input.module.scss";

export default function Input({
  title,
  type,
  name,
  placeholder,
  onChange,
  errorMessage,
  isValid,
  isSubmitted,
}) {
  return (
    <div className={classes.input}>
      <div className={classes.label}>
        <label htmlFor={name}>{title}</label>
        {!isValid && isSubmitted && (
          <span className={classes.errorMessage}>{errorMessage}</span>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`${!isValid && isSubmitted && classes.isError}`}
      />
    </div>
  );
}
