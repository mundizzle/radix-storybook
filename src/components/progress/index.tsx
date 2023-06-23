import { useState, useEffect } from "react";
import { Root, Indicator } from "@radix-ui/react-progress";
import styles from "./index.module.css";

const Progress = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Root value={progress}>
      <Indicator />
    </Root>
  );
};

export default Progress;
