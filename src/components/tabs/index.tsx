import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import styles from "./index.module.css";

const Tabs = () => (
  <Root defaultValue="tab1">
    <List aria-label="Manage your account">
      <Trigger value="tab1">Account</Trigger>
      <Trigger value="tab2">Password</Trigger>
    </List>
    <Content value="tab1">
      <p>Make changes to your account here. Click save when you're done.</p>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input id="username" defaultValue="@peduarte" />
      </fieldset>
      <div>
        <button>Save changes</button>
      </div>
    </Content>
    <Content value="tab2">
      <p>Change your password here. After saving, you&apos;ll be logged out.</p>
      <fieldset>
        <label htmlFor="currentPassword">Current password</label>
        <input id="currentPassword" type="password" />
      </fieldset>
      <fieldset>
        <label htmlFor="newPassword">New password</label>
        <input id="newPassword" type="password" />
      </fieldset>
      <fieldset>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input id="confirmPassword" type="password" />
      </fieldset>
      <div>
        <button>Change password</button>
      </div>
    </Content>
  </Root>
);

export default Tabs;
