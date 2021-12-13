import classes from "../../signup.module.css";
import Form from "./form";
import Illustration from "./illustration";

export default function Signup() {
  return (
    <div className="column">
      <Illustration />
      <Form className={`${classes.Signup} form`} />
    </div>
  );
}
