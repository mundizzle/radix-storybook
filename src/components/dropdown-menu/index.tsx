import { useState } from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Sub,
  SubTrigger,
  SubContent,
  Separator,
  CheckboxItem,
  ItemIndicator,
  RadioGroup,
  RadioItem,
  Arrow,
  Label,
} from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const DropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <Root>
      <Trigger asChild>
        <button aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </Trigger>

      <Portal>
        <Content sideOffset={5}>
          <Item>
            New Tab <div>⌘+T</div>
          </Item>
          <Item>
            New Window <div>⌘+N</div>
          </Item>
          <Item disabled>
            New Private Window <div>⇧+⌘+N</div>
          </Item>
          <Sub>
            <SubTrigger>
              More Tools
              <div>
                <ChevronRightIcon />
              </div>
            </SubTrigger>
            <Portal>
              <SubContent sideOffset={2} alignOffset={-5}>
                <Item>
                  Save Page As… <div>⌘+S</div>
                </Item>
                <Item>Create Shortcut…</Item>
                <Item>Name Window…</Item>
                <Separator />
                <Item>Developer Tools</Item>
              </SubContent>
            </Portal>
          </Sub>

          <Separator />

          <CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ItemIndicator>
              <CheckIcon />
            </ItemIndicator>
            Show Bookmarks <div>⌘+B</div>
          </CheckboxItem>
          <CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <ItemIndicator>
              <CheckIcon />
            </ItemIndicator>
            Show Full URLs
          </CheckboxItem>

          <Separator />

          <Label>People</Label>
          <RadioGroup value={person} onValueChange={setPerson}>
            <RadioItem value="pedro">
              <ItemIndicator>
                <DotFilledIcon />
              </ItemIndicator>
              Pedro Duarte
            </RadioItem>
            <RadioItem value="colm">
              <ItemIndicator>
                <DotFilledIcon />
              </ItemIndicator>
              Colm Tuite
            </RadioItem>
          </RadioGroup>

          <Arrow />
        </Content>
      </Portal>
    </Root>
  );
};

export default DropdownMenu;
