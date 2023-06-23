import {
  Root,
  ToggleGroup,
  ToggleItem,
  Separator,
  Link,
  Button,
} from "@radix-ui/react-toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Toolbar = () => (
  <Root aria-label="Formatting options">
    <ToggleGroup type="multiple" aria-label="Text formatting">
      <ToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToggleItem>
      <ToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToggleItem>
      <ToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToggleItem>
    </ToggleGroup>
    <Separator />
    <ToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToggleItem>
      <ToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToggleItem>
      <ToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToggleItem>
    </ToggleGroup>
    <Separator />
    <Link href="#" target="_blank">
      Edited 2 hours ago
    </Link>
    <Button>Share</Button>
  </Root>
);

export default Toolbar;
