import React from "react";
import { Text } from "../general";
import { StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";

const StyledPostCaption: React.FC<{ text: string; usernames: string[] }> = ({
  text,
  usernames,
}) => (
  <Text color={colors.white}>
    {text.split(" ").map((word, idx) => {
      const spanStyle =
        word.slice(0, 1) === "#"
          ? styles.hashtagText
          : usernames.includes(word.replace("@", "").replace(/\n/g, ""))
          ? styles.mentionText
          : {};
      return (
        <span key={`${word}-${idx}`} style={spanStyle}>
          {word}{" "}
        </span>
      );
    })}
  </Text>
);

const styles: StyleSheet = {
  hashtagText: {
    color: colors.lightBlue,
  },
  mentionText: {
    color: colors.lightBlue,
  },
};

export default StyledPostCaption;
