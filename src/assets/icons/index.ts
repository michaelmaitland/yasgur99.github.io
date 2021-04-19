import DiscordSocial from "./DiscordSocial.svg";
import TwitterSocial from "./TwitterSocial.svg";
import TwitchSocial from "./TwitchSocial.svg";
import InstagramSocial from "./InstagramSocial.svg";
import TikTokSocial from "./TikTokSocial.svg";
import BackArrow from "./ArrowBack.svg";
import ThickCommentGray from "./ThickCommentGray.svg";
import ThickGGUnfillGray from "./ThickGGUnfillGray.svg";
import ThickLikeGray from "./ThickLikeGray.svg";
import ThickShareGray from "./ThickShareGray.svg";
import PaperFiller from "./Paper.svg";

export type IconName =
  | "DiscordSocial"
  | "TwitterSocial"
  | "TwitchSocial"
  | "InstagramSocial"
  | "TikTokSocial"
  | "BackArrow"
  | "ThickCommentGray"
  | "ThickGGUnfillGray"
  | "ThickLikeGray"
  | "ThickShareGray"
  | "PaperFiller";

const icons: {
  [key in IconName]: string;
} = {
  DiscordSocial: DiscordSocial,
  TwitterSocial: TwitterSocial,
  TwitchSocial: TwitchSocial,
  InstagramSocial: InstagramSocial,
  TikTokSocial: TikTokSocial,
  BackArrow: BackArrow,
  ThickShareGray: ThickShareGray,
  ThickCommentGray: ThickCommentGray,
  ThickGGUnfillGray: ThickGGUnfillGray,
  ThickLikeGray: ThickLikeGray,
  PaperFiller: PaperFiller,
};

const getIconByName = (iconName: IconName): string => icons[iconName];

export default getIconByName;
