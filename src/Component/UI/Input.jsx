import classes from "./Input.module.scss";

export default function Input({
  title,
  type,
  name,
  placeholder,
  onChange,
  errorMessage,
  isError,
}) {
  return (
    <div className={classes.input}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
