import { forwardRef } from "react";
import {
  Root,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  ScrollDownButton,
  ScrollUpButton,
  Viewport,
  Group,
  Label,
  Separator,
  Item,
  ItemText,
  ItemIndicator,
} from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Select = () => (
  <Root>
    <Trigger aria-label="Food">
      <Value placeholder="Select a fruit…" />
      <Icon>
        <ChevronDownIcon />
      </Icon>
    </Trigger>
    <Portal>
      <Content>
        <ScrollUpButton>
          <ChevronUpIcon />
        </ScrollUpButton>
        <Viewport>
          <Group>
            <Label>Fruits</Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Group>

          <Separator />

          <Group>
            <Label>Vegetables</Label>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Group>

          <Separator />

          <Group>
            <Label>Meat</Label>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Group>
        </Viewport>
        <ScrollDownButton>
          <ChevronDownIcon />
        </ScrollDownButton>
      </Content>
    </Portal>
  </Root>
);

const SelectItem = forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Item {...props} ref={forwardedRef}>
      <ItemText>{children}</ItemText>
      <ItemIndicator>
        <CheckIcon />
      </ItemIndicator>
    </Item>
  );
});

export default Select;
