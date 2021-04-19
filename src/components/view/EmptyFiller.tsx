import React from "react";
import ReactPlayer from "react-player";
import { Icon, Text } from "../../components/general";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";
import "../../App.css";

//@ts-ignore
// import Video from "../../../public/HoverAd.mp4";
export interface EmptyFillerProps {
  error?: string;
  description?: string;
}

const EmptyFiller: React.FC<EmptyFillerProps> = (props) => {
  return (
    <div style={styles.container}>
      <Icon icon="PaperFiller" style={styles.paper} />
      <div style={styles.info}>
        <Text fontSize={36} weight="bold" color={colors.white}>
          {props.error}
        </Text>
        <Text
          fontSize={16}
          color={colors.gray2}
          style={styles.description}
          textWrap
        >
          {props.description}
        </Text>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  paper: {
    width: 48,
  },
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 24,
    // alignItems: "center",
    flexDirection: "column",
  },
  description: {
    marginTop: 8,
  },
};

export default EmptyFiller;
