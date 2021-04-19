import React from "react";
import Navbar from "./Navbar";
import NavbarOption from "./NavbarOption";
import NavbarSection from "./NavbarSection";
import { Text, Button } from "../../general";
import colors from "../../../constants/Colors";
import { StyleSheet } from "../../../constants/Styles";
// import { useTokenData } from "../../../store/selectors/AuthSelectors";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AstroHead from "./../../../assets/icons/AstroHead.svg";
// import { authLogout } from "../../../store/actions/AuthActions";
// import { useUserEmail } from "../../../store/selectors/UserSelectors";

interface TopNavigationProps {}

const TopNavigation: React.FC<TopNavigationProps> = ({}) => {
  // const history = useHistory();

  return (
    <Navbar height={128}>
      <NavbarSection justify="left">
        <div className="astroAnim">
          <NavbarOption noHover redirectTo="/">
            <div style={styles.logoDiv}>
              <img src={AstroHead} width={56} />
              <Text
                weight="bold"
                color={colors.white}
                fontSize={32}
                style={styles.logoText}
              >
                Hover
              </Text>
            </div>
          </NavbarOption>
        </div>
      </NavbarSection>
      <NavbarSection justify="center">
        <NavbarOption redirectTo="/features">
          <div style={styles.textContainer}>
            <Text weight="medium" fontSize={16}>
              Features
            </Text>
          </div>
        </NavbarOption>
        {/* <NavbarOption redirectTo="/about">
          <div style={styles.textContainer}>
            <Text weight="medium" fontSize={16}>
              About
            </Text>
          </div>
        </NavbarOption> */}
        <NavbarOption redirectTo="/support">
          <div style={styles.textContainer}>
            <Text weight="medium" fontSize={16}>
              Support
            </Text>
          </div>
        </NavbarOption>
        <NavbarOption redirectTo="/legal">
          <div style={styles.textContainer}>
            <Text weight="medium" fontSize={16}>
              Legal
            </Text>
          </div>
        </NavbarOption>
      </NavbarSection>
      <NavbarSection justify="right">
        <NavbarOption noHover redirectTo="/">
          <Button outline buttonText="Download Now" />
        </NavbarOption>
      </NavbarSection>
    </Navbar>
  );
};

const styles: StyleSheet = {
  userDropDown: {
    width: 16,
    paddingTop: 4,
    opacity: 0.5,
  },
  logoText: {
    paddingLeft: 12,
  },
  logoDiv: {
    marginTop: -8,
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    marginTop: 8,
    // padding: -40,
    width: 40,
    height: 3,
    backgroundColor: colors.lightBlue,
  },
  indicatorEmpty: {
    marginTop: 8,
    // padding: -40,
    width: 40,
    height: 3,
    // backgroundColor: colors.navy2,
  },
};

export default TopNavigation;
