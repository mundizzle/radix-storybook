import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Dialog = () => (
  <Root>
    <Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Trigger>
    <Portal>
      <Overlay className="DialogOverlay" />
      <Content className="DialogContent">
        <Title className="DialogTitle">Edit profile</Title>
        <Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Close asChild>
            <button className="Button green">Save changes</button>
          </Close>
        </div>
        <Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Close>
      </Content>
    </Portal>
  </Root>
);

export default Dialog;
