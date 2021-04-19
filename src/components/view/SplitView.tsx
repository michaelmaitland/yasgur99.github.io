import React from "react";
import { StyleSheet } from "../../constants/Styles";

export interface SplitViewProps {
  left?: React.ReactElement;
  right?: React.ReactElement;
  leftAlign?: "flex-start" | "flex-end" | "center";
  rightAlign?: "flex-start" | "flex-end" | "center";
}

const SplitView: React.FC<SplitViewProps> = (props) => {
  return (
    <div style={styles.container}>
      <div
        style={Object.assign({}, styles.halfContainer, {
          alignItems: props.leftAlign,
        })}
      >
        {props.left}
      </div>
      <div
        style={Object.assign({}, styles.halfContainer, {
          alignItems: props.rightAlign,
        })}
      >
        {props.right}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  halfContainer: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SplitView;
