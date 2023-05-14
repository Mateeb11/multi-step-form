import classes from "./Box.module.scss";

export default function Box({ children, className }) {
  return <div className={`${classes.box} ${className}`}>{children}</div>;
}
