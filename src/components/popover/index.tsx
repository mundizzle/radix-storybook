import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Popover = () => (
  <Root>
    <Trigger asChild>
      <button aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </button>
    </Trigger>
    <Portal>
      <Content sideOffset={5}>
        <div>
          <p>Dimensions</p>
          <fieldset>
            <label htmlFor="width">Width</label>
            <input id="width" defaultValue="100%" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxWidth">Max. width</label>
            <input id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset>
            <label htmlFor="height">Height</label>
            <input id="height" defaultValue="25px" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxHeight">Max. height</label>
            <input id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Close aria-label="Close">
          <Cross2Icon />
        </Close>
        <Arrow />
      </Content>
    </Portal>
  </Root>
);

export default Popover;
