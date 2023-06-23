import { useState } from "react";
import {
  Root,
  Menu,
  Trigger,
  Portal,
  Content,
  Item,
  Separator,
  Sub,
  SubTrigger,
  SubContent,
  RadioGroup,
  RadioItem,
  CheckboxItem,
  ItemIndicator,
} from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import styles from "./index.module.css";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const Menubar = () => {
  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);

  return (
    <Root>
      <Menu>
        <Trigger>File</Trigger>
        <Portal>
          <Content align="start" sideOffset={5} alignOffset={-3}>
            <Item>
              New Tab <div>⌘ T</div>
            </Item>
            <Item>
              New Window <div>⌘ N</div>
            </Item>
            <Item disabled>New Incognito Window</Item>
            <Separator />
            <Sub>
              <SubTrigger>
                Share
                <div>
                  <ChevronRightIcon />
                </div>
              </SubTrigger>
              <Portal>
                <SubContent alignOffset={-5}>
                  <Item>Email Link</Item>
                  <Item>Messages</Item>
                  <Item>Notes</Item>
                </SubContent>
              </Portal>
            </Sub>
            <Separator />
            <Item>
              Print… <div>⌘ P</div>
            </Item>
          </Content>
        </Portal>
      </Menu>

      <Menu>
        <Trigger>Edit</Trigger>
        <Portal>
          <Content align="start" sideOffset={5} alignOffset={-3}>
            <Item>
              Undo <div>⌘ Z</div>
            </Item>
            <Item>
              Redo <div>⇧ ⌘ Z</div>
            </Item>
            <Separator />
            <Sub>
              <SubTrigger>
                Find
                <div>
                  <ChevronRightIcon />
                </div>
              </SubTrigger>

              <Portal>
                <SubContent alignOffset={-5}>
                  <Item>Search the web…</Item>
                  <Separator />
                  <Item>Find…</Item>
                  <Item>Find Next</Item>
                  <Item>Find Previous</Item>
                </SubContent>
              </Portal>
            </Sub>
            <Separator />
            <Item>Cut</Item>
            <Item>Copy</Item>
            <Item>Paste</Item>
          </Content>
        </Portal>
      </Menu>

      <Menu>
        <Trigger>View</Trigger>
        <Portal>
          <Content align="start" sideOffset={5} alignOffset={-14}>
            {CHECK_ITEMS.map((item) => (
              <CheckboxItem
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <ItemIndicator>
                  <CheckIcon />
                </ItemIndicator>
                {item}
              </CheckboxItem>
            ))}
            <Separator />
            <Item>
              Reload <div>⌘ R</div>
            </Item>
            <Item disabled>
              Force Reload <div>⇧ ⌘ R</div>
            </Item>
            <Separator />
            <Item>Toggle Fullscreen</Item>
            <Separator />
            <Item>Hide Sidebar</Item>
          </Content>
        </Portal>
      </Menu>

      <Menu>
        <Trigger>Profiles</Trigger>
        <Portal>
          <Content align="start" sideOffset={5} alignOffset={-14}>
            <RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <RadioItem key={item} value={item}>
                  <ItemIndicator>
                    <DotFilledIcon />
                  </ItemIndicator>
                  {item}
                </RadioItem>
              ))}
              <Separator />
              <Item>Edit…</Item>
              <Separator />
              <Item>Add Profile…</Item>
            </RadioGroup>
          </Content>
        </Portal>
      </Menu>
    </Root>
  );
};

export default Menubar;
