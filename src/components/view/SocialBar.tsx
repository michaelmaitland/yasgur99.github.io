import React, { useEffect, useState } from "react";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";
import { TouchableDiv, Icon } from "../general";

export interface SocialBarProps {
  containerStyles?: React.CSSProperties;
}

const SocialBar: React.FC<SocialBarProps> = (props) => {
  return (
    <div style={Object.assign({}, styles.bar, props.containerStyles)}>
      <TouchableDiv>
        <a href={"https://discord.com/invite/GhyE65K9ge"}>
          <Icon icon="DiscordSocial" style={styles.icon} />
        </a>
      </TouchableDiv>
      <TouchableDiv>
        <a href={"https://www.tiktok.com/@shareonhover"}>
          <Icon icon="TikTokSocial" style={styles.icon} />
        </a>
      </TouchableDiv>
      <TouchableDiv>
        <a href={"https://twitch.tv/shareonhover"}>
          <Icon icon="TwitchSocial" style={styles.icon} />
        </a>
      </TouchableDiv>
      <TouchableDiv>
        <a href={"https://twitter.com/shareonhover"}>
          <Icon icon="TwitterSocial" style={styles.icon} />
        </a>
      </TouchableDiv>
      <TouchableDiv>
        <a href={"https://www.instagram.com/shareonhover/"}>
          <Icon icon="InstagramSocial" style={styles.icon} />
        </a>
      </TouchableDiv>
    </div>
  );
};

const styles: StyleSheet = {
  bar: {
    display: "flex",
    justifyContent: "space-between",
    width: 200,
    // backgroundColor: "red",
    alignItems: "center",
  },
  //   icon: {
  //     marginRight: 8,
  //   },
};

export default SocialBar;
