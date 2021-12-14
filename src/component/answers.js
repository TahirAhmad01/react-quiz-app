import classes from "../styles/answers.module.css";
import Checkbox from "./chekbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text={"A New Hope 1"} />
      <Checkbox className={classes.answer} text={"A New Hope 1"} />
      <Checkbox className={classes.answer} text={"A New Hope 1"} />
      <Checkbox className={classes.answer} text={"A New Hope 1"} />
    </div>
  );
}
