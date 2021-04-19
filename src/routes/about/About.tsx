import React from "react";
import { Text } from "../../components/general";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";
import SplitView from "../../components/view/SplitView";
import "../../App.css";
//@ts-ignore
// import Video from "../../../public/HoverAd.mp4";
export interface AboutRouteProps {}

const AboutRoute: React.FC<AboutRouteProps> = ({}) => {
  return (
    <SplitView
      left={
        <div style={styles.supportTextContainer}>
          <Text color={colors.white} weight="medium" fontSize={38}>
            About Us
          </Text>
          <Text
            textWrap
            color={colors.gray2}
            fontSize={18}
            weight="regular"
            style={{ marginTop: 16 }}
          >
            Hover is a platform designed for and by gamers. Our goal is to make
            creating, discovering and consuming gaming content as easy as
            possible.
          </Text>
          {/* <SocialBar containerStyles={{ marginTop: 64 }} /> */}
        </div>
      }
    />
  );
};

const styles: StyleSheet = {
  supportTextContainer: {
    marginTop: "30%",
    marginRight: 32,
  },
  link: {
    textDecoration: "none",
    color: colors.lightBlue,
  },
};

export default AboutRoute;
