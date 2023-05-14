import classes from "./Box.module.scss";

export default function Box({ children, className, onClick, id }) {
  return (
    <div className={`${classes.box} ${className}`} onClick={onClick} id={id}>
      {children}
    </div>
  );
}
