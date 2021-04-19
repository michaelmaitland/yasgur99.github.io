import React from "react";
import ReactPlayer from "react-player";
import SplitView from "../../components/view/SplitView";
import { Icon, Text } from "../../components/general";
import { StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { IconName } from "../../assets/icons";
import Phone from "../../components/view/Phone";

import LandingPage from "../../assets/images/LandingPhone.png";
import SignUpPage from "../../assets/images/SignUpPhone.png";
import { Link } from "react-router-dom";
export interface FeaturesRouteProps {}

export const FeatureWithIcon = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <div style={styles.featureContainer}>
    <Text
      fontSize={18}
      color={colors.lightBlue}
      weight="medium"
      style={{ marginBottom: 8 }}
    >
      00{number}
    </Text>
    <Text
      fontSize={36}
      color={colors.white}
      weight="bold"
      style={{ marginBottom: 16 }}
    >
      {title}
    </Text>
    <Text textWrap fontSize={18} color={colors.gray2} lineHeight={1.5}>
      {description}
    </Text>
  </div>
);

const FeaturesRoute: React.FC<FeaturesRouteProps> = ({}) => {
  return (
    <div style={styles.page}>
      <div style={styles.featureTextContainer}>
        <FeatureWithIcon
          number={1}
          title="Clip"
          description="Sync your Playstation, Xbox and PC Clips to Hover "
        />
        <FeatureWithIcon
          number={3}
          title="Discover"
          description="Earn Gravity (XP) for being Active. More Gravity = More Views"
        />
      </div>
      <div style={styles.ad} className="perspective">
        <Link to="/" style={styles.ad}>
          <Phone animClassName="leftPhoneAnim" image={LandingPage} />

          <Phone animClassName="rightPhoneAnim" image={SignUpPage} />
        </Link>
      </div>
      <div style={styles.featureTextContainer}>
        <FeatureWithIcon
          number={2}
          title="Create"
          description="Edit and Create Highlights to Share on Hover"
        />
        <FeatureWithIcon
          number={4}
          title="Compete"
          description="Enter clip-challenges to Compete for cash prizes live on Twitch"
        />
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  page: {
    display: "flex",
    justifyContent: "center",
    // flexDirection: "column",
  },
  featureTextContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ad: {
    flex: 2,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  featureContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 48,
  },
  featureIcon: {
    width: "20%",
  },
};

export default FeaturesRoute;
