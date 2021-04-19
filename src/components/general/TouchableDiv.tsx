import React, { useState } from "react";
import getIconByName, { IconName } from "../../assets/icons";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";

export interface TouchableDivProps {
  style?: React.CSSProperties;
  onPress?: () => void;
}

const TouchableDiv: React.FC<TouchableDivProps> = (props) => {
  const { onPress } = props;

  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    if (onPress) onPress();
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const divStyle = Object.assign(
    {},
    styles.touchableDiv,
    isHovering ? styles.hover : null,
    isActive ? styles.active : null,
    props.style
  );

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={divStyle}
    >
      {props.children}
    </div>
  );
};

const styles: StyleSheet = {
  touchableDiv: {
    cursor: "pointer",
  },
  hover: {
    opacity: 0.8,
  },
  active: { opacity: 0.4 },
};

export default TouchableDiv;
