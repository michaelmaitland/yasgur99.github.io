type ColorName =
  | "navy1"
  | "navy2"
  | "navy3"
  | "gray1"
  | "gray2"
  | "gray3"
  | "lightBlue"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "white";

const colors: { [key in ColorName]: string } = {
  navy1: "#26293B", // lightest navy
  navy2: "#1D1F2F", // navy
  navy3: "#181A28", // darkest navy
  gray1: "#CFD0E1", // lightest gray
  gray2: "#8C90A8", // gray
  gray3: "#323548", // darkest gray
  lightBlue: "#0CD3FF",
  blue: "#038EC9",
  green: "#48BF1E",
  yellow: "#FEC122",
  orange: "#FF8A1F",
  red: "#E63625",
  purple: "#6441A5",
  white: "#FFFFFF",
};

export default colors;
