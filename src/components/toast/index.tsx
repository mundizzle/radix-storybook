import { useState, useRef, useEffect } from "react";
import {
  Provider,
  Root,
  Title,
  Description,
  Action,
  Viewport,
} from "@radix-ui/react-toast";
import styles from "./index.module.css";

const Toast = () => {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Provider swipeDirection="right">
      <button
        className="Button large violet"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button>

      <Root open={open} onOpenChange={setOpen}>
        <Title>Scheduled: Catch up</Title>
        <Description asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </Description>
        <Action asChild altText="Goto schedule to undo">
          <button>Undo</button>
        </Action>
      </Root>
      <Viewport />
    </Provider>
  );
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default Toast;
