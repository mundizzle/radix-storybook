import { Root, Field, Control, Submit } from "@radix-ui/react-form";
import styles from "./index.module.css";

interface Props {
  tokens: string;
}

const Form = ({ tokens }: Props) => (
  <Root className={styles.root} data-tokens={tokens}>
    <h2 className={styles.heading}>Card Title</h2>
    <p className={styles.instructions}>
      Lorem ipsum dolor sit amet consectetur. Nec egesscele risque.
    </p>
    <Field className={styles.field} name="email">
      <Control asChild>
        <input type="email" required placeholder="Email" />
      </Control>
    </Field>
    <Field className={styles.field} name="password">
      <Control asChild>
        <input type="password" required placeholder="Password" />
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
