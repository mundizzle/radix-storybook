import {
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-hover-card";
import styles from "./index.module.css";

const HoverCard = () => (
  <Root>
    <Trigger asChild>
      <a
        href="https://twitter.com/radix_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </a>
    </Trigger>
    <Portal>
      <Content sideOffset={5}>
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <div>
            <div>
              <div>Radix</div>
              <div>@radix_ui</div>
            </div>
            <div>
              Components, icons, colors, and templates for building
              high-quality, accessible UI. Free and open-source.
            </div>
            <div>
              <div>
                <div>0</div> <div>Following</div>
              </div>
              <div>
                <div>2,900</div>
                <div>Followers</div>
              </div>
            </div>
          </div>
        </div>

        <Arrow />
      </Content>
    </Portal>
  </Root>
);

export default HoverCard;
