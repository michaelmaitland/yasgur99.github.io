import React from "react";
import colors from "../../constants/Colors";
import { StyleSheet, FontStyle, FontWeights } from "../../constants/Styles";

export interface TextProps {
  style?: React.CSSProperties;
  fontSize?: number;
  color?: string;
  weight?: FontWeights;
  verticalPadding?: boolean;
  horizontalPadding?: boolean;
  letterSpacing?: number;
  textWrap?: boolean;
  lineHeight?: number;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    fontSize,
    color,
    weight,
    verticalPadding,
    horizontalPadding,
    letterSpacing,
    textWrap,
    lineHeight,
  } = props;

  const textStyle = Object.assign(
    {},
    styles.text,
    fontSize && { fontSize: fontSize },
    color && { color: color },
    weight && { ...FontStyle[weight] },
    verticalPadding && { ...styles.verticalPadding },
    horizontalPadding && { ...styles.horizontalPadding },
    letterSpacing && { letterSpacing: letterSpacing },
    textWrap && { whiteSpace: "wrap" },
    lineHeight && { lineHeight: lineHeight },
    props.style
  );

  return <p style={textStyle}>{props.children}</p>;
};

const styles: StyleSheet = {
  text: {
    margin: 0,
    fontSize: 14,
    whiteSpace: "nowrap",
    // color: colors.white,
    ...FontStyle.regular,
  },
  verticalPadding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  horizontalPadding: {
    paddingLeft: 8,
    paddingRight: 8,
  },
};

export default Text;
