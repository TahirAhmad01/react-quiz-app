import success from "../assests/images/success.png";
import classes from "../styles/summary.module.css";

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class={classes.badge}>
        <img src={success} alt="Success" />
      </div>
    </div>
  );
}
