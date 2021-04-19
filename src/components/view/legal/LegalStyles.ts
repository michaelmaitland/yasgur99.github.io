import { TextProps } from "../../general/Text";
import colors from "../../../constants/Colors";

export const headerProps: TextProps = {
  fontSize: 20,
  textWrap: true,
  color: colors.white,
  weight: "medium",
  style: {
    marginTop: 8,
    marginBottom: 8,
  },
};

export const paragraphProps: TextProps = {
  // fontSize: 20,
  textWrap: true,
  color: colors.gray1,
  style: {
    marginTop: 4,
  },
};
