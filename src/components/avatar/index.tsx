import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import styles from "./index.module.css";

const Avatar = () => (
  <div>
    <Root>
      <Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Fallback delayMs={600}>CT</Fallback>
    </Root>
    <Root>
      <Image
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Fallback delayMs={600}>JD</Fallback>
    </Root>
    <Root>
      <Fallback>PD</Fallback>
    </Root>
  </div>
);

export default Avatar;
