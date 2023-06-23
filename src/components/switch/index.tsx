import { Root, Thumb } from "@radix-ui/react-switch";
import styles from "./index.module.css";

const Switch = () => (
  <form>
    <div>
      <label htmlFor="airplane-mode">Airplane mode</label>
      <Root id="airplane-mode">
        <Thumb />
      </Root>
    </div>
  </form>
);

export default Switch;
