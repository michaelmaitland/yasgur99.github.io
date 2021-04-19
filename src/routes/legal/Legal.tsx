import React from "react";
import { Text, Button } from "../../components/general";
import colors from "../../constants/Colors";
import { Link } from "react-router-dom";
import { StyleSheet } from "../../constants/Styles";
import SplitView from "../../components/view/SplitView";
export interface LeaglRouteProps {}

const LeaglRoute: React.FC<LeaglRouteProps> = ({}) => {
  const buttonProps = {
    buttonStyles: { borderColor: colors.gray2 },
    buttonHoverStyles: { borderColor: colors.gray1 },
    outline: true,
  };

  return (
    <SplitView
      left={
        <div>
          <div style={styles.legalTextContainer}>
            <Text color={colors.white} weight="medium" fontSize={38}>
              Legal
            </Text>
            <Text
              textWrap
              color={colors.gray2}
              fontSize={18}
              weight="regular"
              style={{ marginTop: 16 }}
            >
              Want to voluntarily look over of Terms and Conditions, Privacy or
              Data policy? Well then this is the page for you! If you have any
              legal questions, feel free to contact us at -{" "}
              <a style={styles.link} href="mailto:support@hover.gg">
                support@hover.gg
              </a>
            </Text>
          </div>
          <div style={styles.buttonContainer}>
            <Link to={"/tos"} style={styles.routeLink}>
              <Button {...buttonProps} buttonText="Terms of Service" />
            </Link>
            <Link to={"/datapolicy"} style={styles.routeLink}>
              <Button {...buttonProps} buttonText="Data Policy" />
            </Link>
            <Link to={"/privacypolicy"} style={styles.routeLink}>
              <Button {...buttonProps} buttonText="Privacy Policy" />
            </Link>
          </div>
        </div>
      }
    />
  );
};

const styles: StyleSheet = {
  buttonContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
  },
  legalTextContainer: {
    marginTop: "30%",
    marginRight: 32,
  },
  routeLink: {
    textDecoration: "none",
    marginRight: 16,
  },
  link: {
    textDecoration: "none",
    color: colors.lightBlue,
  },
};

export default LeaglRoute;
