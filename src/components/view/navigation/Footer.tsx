import React from "react";
import Navbar from "./Navbar";
import NavbarOption from "./NavbarOption";
import NavbarSection from "./NavbarSection";
import { Text, Button } from "../../general";
import colors from "../../../constants/Colors";
import { StyleSheet } from "../../../constants/Styles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Navbar containerStyles={{ bottom: 0, left: 0 }} height={32}>
      <NavbarSection justify="left"></NavbarSection>
      <NavbarSection justify="center">
        <Text color={colors.gray3} weight="medium" fontSize={12}>
          @ 2021 Skwads LLC, All Rights Reserved
        </Text>
      </NavbarSection>
      <NavbarSection justify="right"></NavbarSection>
    </Navbar>
  );
};

const styles: StyleSheet = {};

export default Footer;
