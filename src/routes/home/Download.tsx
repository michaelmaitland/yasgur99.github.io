import React from "react";
import { StyleSheet } from "../../constants/Styles";
import { Text, Button } from "../../components/general";
import Astro from "../../assets/icons/AstroFull.svg";
import colors from "../../constants/Colors";
import SocialBar from "../../components/view/SocialBar";
import SplitView from "../../components/view/SplitView";
export interface DownloadRouteProps {}

const DownloadRoute: React.FC<DownloadRouteProps> = ({}) => {
  return (
    <SplitView
      left={
        <div style={styles.downloadContainer}>
          <div style={styles.logoContainer}>
            <img src={Astro} className="astroAnim" />
          </div>
          <Text color={colors.white} weight="medium" fontSize={38}>
            Download Now!
          </Text>
          <Text color={colors.gray2} fontSize={18} style={{ marginTop: 16 }}>
            Hover is now avaliable for iOS and Android
          </Text>
          <div style={styles.buttonContainer}>
            <a
              style={styles.button}
              href="https://apps.apple.com/us/app/hovergg/id1476613869"
            >
              <Button
                outline
                buttonText="Download for iOS"
                containerStyles={{ marginRight: 8 }}
              />
            </a>
            <a
              style={styles.button}
              href="https://play.google.com/store/apps/details?id=com.mergg"
            >
              <Button
                outline
                buttonText="Download for Android"
                containerStyles={{ marginLeft: 8 }}
              />
            </a>
          </div>
          <SocialBar containerStyles={{ marginTop: 64 }} />
        </div>
      }
      right={
        <div style={styles.phoneContainer} className="perspective">
          {/* <Particles params={particlesConfig} style={styles.particles} /> */}
          {/* <Phone
            animClassName="leftPhoneAnim"
            containerStyles={{ marginTop: -72 }}
          /> */}
        </div>
      }
    />
  );
};

const styles: StyleSheet = {
  logoContainer: {
    width: "40%",
    marginBottom: 16,
  },
  downloadContainer: {
    alignSelf: "center",
    width: "100%",
    // backgroundColor: "yellow",
  },
  button: {
    textDecoration: "none",
  },
  phoneContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
  },
  particles: {
    position: "absolute",
    left: 0,
  },
  buttonContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
  },
};

export default DownloadRoute;
