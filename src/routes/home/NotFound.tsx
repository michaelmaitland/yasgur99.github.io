import React from "react";
import { StyleSheet } from "../../constants/Styles";
import { Text, Button } from "../../components/general";
import Astro from "../../assets/icons/AstroFull.svg";
import colors from "../../constants/Colors";
import SocialBar from "../../components/view/SocialBar";
import SplitView from "../../components/view/SplitView";
import EmptyFiller from "../../components/view/EmptyFiller";
export interface NotFoundRouteProps {}

const NotFoundRoute: React.FC<NotFoundRouteProps> = ({}) => {
  return (
    <div style={styles.page}>
      <EmptyFiller
        error="404"
        description="We can't find the page you are looking for."
      />
    </div>
  );
};

const styles: StyleSheet = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export default NotFoundRoute;
