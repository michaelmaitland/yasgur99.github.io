import React, { useState } from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { Text } from "../general";
import { TextProps } from "../general/Text";
export interface ButtonProps {
  containerStyles?: React.CSSProperties;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
  disabled?: boolean;
  outline?: boolean;
  buttonStyles?: React.CSSProperties;
  buttonHoverStyles?: React.CSSProperties;
  buttonTextProps?: TextProps;
}

const Button: React.FC<ButtonProps> = ({
  containerStyles,
  isLoading,
  onClick,
  buttonText,
  disabled,
  outline,
  buttonStyles,
  buttonHoverStyles,
  buttonTextProps,
}) => {
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
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const buttonStyle = Object.assign(
    {},
    styles.button,
    outline && styles.outline,
    isHovering && (outline ? styles.hoverOutline : styles.hover),
    isLoading && styles.buttonLoading,
    disabled && styles.disabled,
    buttonStyles,
    isHovering && buttonHoverStyles,
    isActive && (outline ? styles.activeOutline : styles.active)
  );

  return (
    <div style={Object.assign({}, styles.container, containerStyles)}>
      {isLoading ? (
        <div style={buttonStyle}></div>
      ) : (
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onClick={onClick}
          style={buttonStyle}
        >
          <Text weight="medium" {...buttonTextProps}>
            {buttonText}
          </Text>
        </button>
      )}
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    marginBottom: 8,
    marginTop: 8,
    width: "100%",
  },
  button: {
    height: 36,
    backgroundColor: colors.blue,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: 20,
    color: colors.white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    outline: "none",
    cursor: "pointer",
    ...FontStyle.medium,
  },
  buttonLoading: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "default",
  },
  hover: {
    backgroundColor: `${colors.blue}d8`,
  },
  active: {
    opacity: 0.5,
  },
  loading: {
    paddingTop: 2,
  },
  disabled: {
    cursor: "default",
    backgroundColor: `${colors.blue}68`,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    color: colors.white,
    backgroundColor: "transparent",
  },
  hoverOutline: {
    borderColor: `${colors.lightBlue}b8`,
    // color: `${colors.white}b8`,
  },
  activeOutline: {
    opacity: 0.5,
  },
};

export default Button;
