import { Link } from "react-router-dom";
import signImg from "../../assests/images/signup.svg";
import classes from "../../styles/signup.module.css";
import Button from "../button";
import Checkbox from "../chekbox";
import Form from "../form";
import Illustration from "../illustration";
import TextInput from "../textinput";

export default function Signup() {
  return (
    <>
      <h1>Create a new account</h1>
      <div className="column">
        <Illustration>
          <img src={signImg} alt="Signup" />
        </Illustration>

        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="text" placeholder="Enter password" icon="lock" />

          <TextInput
            type="text"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms & Conditions" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
