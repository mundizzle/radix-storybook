import { useState } from "react";
import { Root, Trigger, Content } from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Collapsible = () => {
  const [open, setOpen] = useState(false);
  return (
    <Root open={open} onOpenChange={setOpen}>
      <div>
        <span>@peduarte starred 3 repositories</span>
        <Trigger asChild>
          <button>{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
        </Trigger>
      </div>

      <div>
        <span>@radix-ui/primitives</span>
      </div>

      <Content>
        <div>
          <span>@radix-ui/colors</span>
        </div>
        <div>
          <span>@stitches/react</span>
        </div>
      </Content>
    </Root>
  );
};

export default Collapsible;
