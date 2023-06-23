import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import styles from "./index.module.css";

const RadioGroup = () => (
  <form>
    <Root defaultValue="default" aria-label="View density">
      <div>
        <Item value="default" id="r1">
          <Indicator />
        </Item>
        <label htmlFor="r1">Default</label>
      </div>
      <div>
        <Item value="comfortable" id="r2">
          <Indicator />
        </Item>
        <label htmlFor="r2">Comfortable</label>
      </div>
      <div>
        <Item value="compact" id="r3">
          <Indicator />
        </Item>
        <label htmlFor="r3">Compact</label>
      </div>
    </Root>
  </form>
);

export default RadioGroup;
