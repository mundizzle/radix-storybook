import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Accordion = () => (
  <Root className={styles.root} type="single" defaultValue="item-1" collapsible>
    <Item value="item-1" className={styles.item}>
      <Header className={styles.header}>
        <Trigger className={styles.trigger}>
          Lorem ipsum dolor sit amet?
          <ChevronDownIcon aria-hidden />
        </Trigger>
      </Header>
      <Content className={styles.content}>
        Lorem ipsum dolor sit amet consectet Iaculis rutrum et et nibh.
      </Content>
    </Item>

    <Item value="item-2" className={styles.item}>
      <Header className={styles.header}>
        <Trigger className={styles.trigger}>
          Lorem ipsum dolor sit amet?
          <ChevronDownIcon aria-hidden />
        </Trigger>
      </Header>
      <Content className={styles.content}>
        Lorem ipsum dolor sit amet consectet Iaculis rutrum et et nibh.
      </Content>
    </Item>

    <Item value="item-3" className={styles.item}>
      <Header className={styles.header}>
        <Trigger className={styles.trigger}>
          Lorem ipsum dolor sit amet?
          <ChevronDownIcon aria-hidden />
        </Trigger>
      </Header>
      <Content className={styles.content}>
        Lorem ipsum dolor sit amet consectet Iaculis rutrum et et nibh.
      </Content>
    </Item>
  </Root>
);

export default Accordion;
