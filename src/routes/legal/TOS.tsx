import React from "react";
import TOSView from "../../components/view/legal/TOS";
import { StyleSheet } from "../../constants/Styles";

export interface TOSRouteProps {}

const TOSRoute: React.FC<TOSRouteProps> = ({}) => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <TOSView />
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  page: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "80%",
  },
};

export default TOSRoute;
