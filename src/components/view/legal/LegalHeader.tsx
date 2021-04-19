import React from "react";
import { StyleSheet } from "../../../constants/Styles";
import { TouchableDiv, Icon, Text } from "../../general";
import { headerProps } from "./LegalStyles";
import { Link } from "react-router-dom";
export interface LegalHeaderProps {
  title: string;
}

const LegalHeader: React.FC<LegalHeaderProps> = (props) => {
  return (
    <div style={styles.header}>
      <Link to="/legal">
        <TouchableDiv>
          <Icon icon="BackArrow" style={{ paddingRight: 24 }} />
        </TouchableDiv>
      </Link>
      <Text {...headerProps} fontSize={32}>
        {props.title}
      </Text>
    </div>
  );
};

const styles: StyleSheet = {
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
};

export default LegalHeader;
