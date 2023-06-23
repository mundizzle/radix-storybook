import { useState } from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  SubContent,
  SubTrigger,
  Separator,
  Sub,
  CheckboxItem,
  ItemIndicator,
  Label,
  RadioGroup,
  RadioItem,
} from "@radix-ui/react-context-menu";
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const ContextMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <Root>
      <Trigger>Right click here.</Trigger>
      <Portal>
        <Content sideOffset={5} align="end">
          <Item>
            Back <div>⌘+[</div>
          </Item>
          <Item disabled>
            Foward <div>⌘+]</div>
          </Item>
          <Item>
            Reload <div>⌘+R</div>
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
              <ItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ItemIndicator>
              Colm Tuite
            </RadioItem>
          </RadioGroup>
        </Content>
      </Portal>
    </Root>
  );
};

export default ContextMenu;
