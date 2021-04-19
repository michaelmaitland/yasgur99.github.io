import React from "react";
import ReactPlayer from "react-player";
import { Text } from "../../components/general";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";
import "../../App.css";

//@ts-ignore
// import Video from "../../../public/HoverAd.mp4";
export interface PhoneProps {
  containerStyles?: React.CSSProperties;
  animClassName?: string;
  image?: string;
  onPress?: () => void;
}

const Phone: React.FC<PhoneProps> = (props) => {
  return (
    <div
      style={Object.assign({}, styles.outerContainer, props.containerStyles)}
      className={props.animClassName}
      onMouseDown={props.onPress}
    >
      <div style={styles.phoneContainer}>
        <div style={styles.phone} className="phone">
          <div style={styles.phoneTop} />
          <div style={styles.phoneScreen}>
            <div style={styles.phoneDisplay}>
              {/* <div style={styles.}> */}
              <img src={props.image} style={styles.img} />
              {/* </div> */}
            </div>
            <div style={styles.notch}>
              <div style={styles.notchSpace} />
              <div style={styles.speaker} />
              <div style={styles.camera} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  phoneDisplay: {
    display: "flex",
  },
  phoneScreen: {
    backgroundColor: colors.navy2,
    width: "100%",
    height: "100%",
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  notch: {
    width: "40%",
    backgroundColor: colors.lightBlue,
    height: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    position: "absolute",
    zIndex: 100,
  },
  phoneTop: {
    position: "absolute",
    display: "flex",
    boxShadow: `inset 0px 0px 0px 10px #0CD3FF`,
    width: "100%",
    height: "100%",
    borderRadius: 32,
    zIndex: 100,
  },
  outerContainer: {
    // backgroundColor: "purple",
    justifyContent: "center",
  },
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 32,
    marginLeft: 8,
  },
  img: {
    width: "100%",
    maxWidth: "100%",
    // maxHeight: "100%",
  },
  notchSpace: {
    width: 6,
    height: 6,
    marginRight: 4,
  },
  camera: {
    width: 6,
    height: 6,
    backgroundColor: colors.navy2,
    borderRadius: 8,
    marginLeft: 4,
  },
  speaker: {
    width: "25%",
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.navy2,
  },
  phoneContainer: {
    width: "40%",
    minWidth: 192,
    transformStyle: "preserve-3d",
    // backgroundColor: "red",
    alignSelf: "center",
  },
};

export default Phone;
