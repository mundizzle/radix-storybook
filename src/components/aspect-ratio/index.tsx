import { Root } from "@radix-ui/react-aspect-ratio";
import styles from "./index.module.css";

const AspectRatio = () => (
  <div>
    <Root ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </Root>
  </div>
);

export default AspectRatio;
