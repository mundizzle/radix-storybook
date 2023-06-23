import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import styles from "./index.module.css";

const Slider = () => (
  <form>
    <Root defaultValue={[50]} max={100} step={1}>
      <Track>
        <Range />
      </Track>
      <Thumb aria-label="Volume" />
    </Root>
  </form>
);

export default Slider;
