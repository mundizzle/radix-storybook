import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import { PlusIcon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Tooltip = () => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>
          <button>
            <PlusIcon />
          </button>
        </Trigger>
        <Portal>
          <Content sideOffset={5}>
            Add to library
            <Arrow />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

export default Tooltip;
