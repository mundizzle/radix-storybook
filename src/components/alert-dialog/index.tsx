import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Action,
} from "@radix-ui/react-alert-dialog";
import styles from "./index.module.css";

const AlertDialog = () => (
  <Root>
    <Trigger asChild>
      <button>Delete account</button>
    </Trigger>
    <Portal>
      <Overlay />
      <Content>
        <Title>Are you absolutely sure?</Title>
        <Description>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </Description>
        <div>
          <Cancel asChild>
            <button>Cancel</button>
          </Cancel>
          <Action asChild>
            <button>Yes, delete account</button>
          </Action>
        </div>
      </Content>
    </Portal>
  </Root>
);

export default AlertDialog;
