import classes from "../styles/button.module.css";

export default function Button({ children, className }) {
  return <div class={`${classes.button} ${className}`}>{children}</div>;
}
