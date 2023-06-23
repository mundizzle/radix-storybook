import {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
} from "@radix-ui/react-scroll-area";
import styles from "./index.module.css";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const ScrollArea = () => (
  <Root>
    <Viewport>
      <div>
        <div>Tags</div>
        {TAGS.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </Viewport>
    <Scrollbar orientation="vertical">
      <Thumb />
    </Scrollbar>
    <Scrollbar orientation="horizontal">
      <Thumb />
    </Scrollbar>
    <Corner />
  </Root>
);

export default ScrollArea;
