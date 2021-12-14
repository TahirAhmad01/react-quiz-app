import logImg from "../../assests/images/login.svg";
import classes from "../../styles/login.module.css";
import Button from "../button";
import Form from "../form";
import Illustration from "../illustration";
import TextInput from "../textinput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={logImg} alt="Login" />
        </Illustration>

        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>

          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
          ></TextInput>

          <Button>
            <span>Submit Now</span>
          </Button>
        </Form>
      </div>
    </>
  );
}
