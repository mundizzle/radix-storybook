import { Root } from "@radix-ui/react-separator";
import styles from "./index.module.css";

const Separator = () => (
  <div>
    <div>Radix Primitives</div>
    <div>An open-source UI component library.</div>
    <Root />
    <div>
      <div>Blog</div>
      <Root decorative orientation="vertical" />
      <div>Docs</div>
      <Root decorative orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
);

export default Separator;
