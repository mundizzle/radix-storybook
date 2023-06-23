import { Root, Item } from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const ToggleGroup = () => (
  <Root type="single" defaultValue="center" aria-label="Text alignment">
    <Item value="left" aria-label="Left aligned">
      <TextAlignLeftIcon />
    </Item>
    <Item value="center" aria-label="Center aligned">
      <TextAlignCenterIcon />
    </Item>
    <Item value="right" aria-label="Right aligned">
      <TextAlignRightIcon />
    </Item>
  </Root>
);

export default ToggleGroup;
