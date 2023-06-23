import {
  Root,
  Field,
  Label,
  Message,
  Control,
  Submit,
} from "@radix-ui/react-form";
import styles from "./index.module.css";

const Form = () => (
  <Root className={styles.root}>
    <h2 className={styles.heading}>Login</h2>
    <p className={styles.instructions}>
      Lorem ipsum dolor sit amet consectetur. Nec egesscele risque.
    </p>
    <Field className={styles.field} name="email">
      <Label>Email</Label>
      <Message match="valueMissing">Please enter your email</Message>
      <Message match="typeMismatch">Please provide a valid email</Message>
      <Control asChild>
        <input type="email" required />
      </Control>
    </Field>
    <Field className={styles.field} name="password">
      <Label>Password</Label>
      <Message match="valueMissing">Please enter a password</Message>
      <Control asChild>
        <input type="password" required />
      </Control>
    </Field>
    <div className={styles["button-container"]}>
      <Submit asChild>
        <button>Sign In</button>
      </Submit>
    </div>
  </Root>
);

export default Form;
