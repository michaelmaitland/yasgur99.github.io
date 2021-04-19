import React, { useEffect, useState } from "react";
import colors from "../../../constants/Colors";
import { StyleSheet } from "../../../constants/Styles";

export interface NavbarProps {
  containerStyles?: React.CSSProperties;
  height?: number;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navbarStyle = Object.assign(
    {},
    styles.navbar,
    props.containerStyles,
    props.height && { height: props.height }
  );

  return (
    <div>
      <div style={navbarStyle}>{props.children}</div>
    </div>
  );
};

const styles: StyleSheet = {
  navbar: {
    height: 96,
    backgroundColor: colors.navy2,
    alignItems: "center",
    display: "flex",
    borderWidth: 0,
    borderBottomWidth: 0,
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
};

export default Navbar;
