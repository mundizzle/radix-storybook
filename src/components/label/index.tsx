import { Root } from "@radix-ui/react-label";
import styles from "./index.module.css";

const Label = () => (
  <div>
    <Root htmlFor="firstName">First name</Root>
    <input type="text" id="firstName" defaultValue="Pedro Duarte" />
  </div>
);

export default Label;
