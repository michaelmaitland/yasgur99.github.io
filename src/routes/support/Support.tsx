import React from "react";
import { StyleSheet } from "../../constants/Styles";
import { Text, Button } from "../../components/general";
import colors from "../../constants/Colors";
import SocialBar from "../../components/view/SocialBar";
import TextInput from "../../components/input/TextInput";
import SplitView from "../../components/view/SplitView";
export interface SupportRouteProps {}

const SupportRoute: React.FC<SupportRouteProps> = ({}) => {
  return (
    <SplitView
      left={
        <div style={styles.supportTextContainer}>
          <Text color={colors.white} weight="medium" fontSize={38}>
            Support
          </Text>
          <Text
            textWrap
            color={colors.gray2}
            fontSize={18}
            weight="regular"
            style={{ marginTop: 16 }}
          >
            If you are currently experiencing an issue with Hover, you can send
            us an email at -{" "}
            <a style={styles.link} href="mailto:support@hover.gg">
              support@hover.gg
            </a>
            . If email is a bit too old school, feel free to join our discord
            and we can help you out there!
          </Text>
          <SocialBar containerStyles={{ marginTop: 64 }} />
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

export default SupportRoute;
