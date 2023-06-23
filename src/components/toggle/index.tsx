import { Root } from "@radix-ui/react-toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Toggle = () => (
  <Root aria-label="Toggle italic">
    <FontItalicIcon />
  </Root>
);

export default Toggle;
