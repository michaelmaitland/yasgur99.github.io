import React from "react";
import { StyleSheet } from "../../constants/Styles";
import DataPolicy from "../../components/view/legal/DataPolicy";
export interface DataPolicyRouteProps {}

const DataPolicyRoute: React.FC<DataPolicyRouteProps> = ({}) => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <DataPolicy />
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

export default DataPolicyRoute;
