import React from "react";
import { StyleSheet } from "../../constants/Styles";
import PrivacyPolicyView from "../../components/view/legal/PrivacyPolicy";

export interface PrivacyPolicyRouteProps {}

const PrivacyPolicyRoute: React.FC<PrivacyPolicyRouteProps> = ({}) => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <PrivacyPolicyView />
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

export default PrivacyPolicyRoute;
