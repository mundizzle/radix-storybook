import { Root, Indicator } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Checkbox = () => (
  <form>
    <div>
      <Root defaultChecked id="c1">
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Root>
      <label htmlFor="c1">Accept terms and conditions.</label>
    </div>
  </form>
);

export default Checkbox;
