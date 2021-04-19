import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button, Icon, Text, TouchableDiv } from "../../components/general";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";
import "../../App.css";
import pfp from "../../assets/images/pfp.png";
import StyledPostCaption from "./StyledPostCaption";
import { Link } from "react-router-dom";

// @ts-ignore
export interface PostPreviewProps {
  containerStyles?: React.CSSProperties;
  post: ViewPostProjection;
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const {
    user,
    game,
    caption,
    likeCount,
    gglikeCount,
    commentCount,
    originalMediaURL,
  } = props.post;

  console.log(props.post);

  return (
    <div style={styles.container}>
      <video
        loop
        autoPlay
        muted
        controls
        style={styles.video}
        src={originalMediaURL}
      />
      <div style={styles.postDataContainer}>
        <div style={styles.postDetailsContainer}>
          {user.profile.profilePicUrl ? (
            <img
              src={user.profile.profilePicUrl}
              style={styles.profilePicture}
            />
          ) : (
            <div style={styles.profilePicture} />
          )}
          <div style={styles.postDetails}>
            <Text
              color={colors.white}
              fontSize={22}
              weight="medium"
              style={styles.username}
            >
              {user.username}
            </Text>
            <StyledPostCaption
              text={caption}
              usernames={(props.post.mentions || []).map(
                ({ user }) => user.username
              )}
            />
            <Text
              color={colors.gray2}
              weight="medium"
              fontSize={12}
              style={styles.gameText}
            >
              Playing {game.name}
            </Text>
          </div>
        </div>
        <div style={styles.postActionContainer}>
          <div style={styles.postActions}>
            <div style={styles.postActionIconContainer}>
              <Icon icon="ThickLikeGray" style={styles.likeIcon} />
              <Text
                fontSize={16}
                weight="medium"
                color={colors.white}
                style={styles.postActionNumber}
              >
                {likeCount}
              </Text>
            </div>
            {/* <div style={styles.postActionIconContainer}>
              <Icon icon="ThickGGUnfillGray" style={styles.ggIcon} />
              <Text
                fontSize={16}
                weight="medium"
                color={colors.white}
                style={styles.postActionNumber}
              >
                {gglikeCount}
              </Text>
            </div> */}
            <div style={styles.postActionIconContainer}>
              <Icon icon="ThickCommentGray" style={styles.commentIcon} />
              <Text
                fontSize={16}
                weight="medium"
                color={colors.white}
                style={styles.postActionNumber}
              >
                {commentCount}
              </Text>
            </div>
            <TouchableDiv style={styles.postActionIconContainer}>
              <Icon icon="ThickShareGray" style={styles.shareIcon} />
              <Text
                weight="medium"
                color={colors.white}
                style={styles.postActionNumber}
              >
                Share
              </Text>
            </TouchableDiv>
          </div>
          <Link style={styles.button} to="/">
            <Button
              outline
              buttonText={"View in App"}
              containerStyles={styles.viewButton}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  video: {
    width: "100%",
    borderWidth: 0,
    outline: "none",
    backgroundColor: colors.navy3,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    userSelect: "none",
  },
  postDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    alignItems: "center",
  },
  postDetails: {
    display: "flex",
    flexDirection: "column",
  },
  postActionNumber: {
    paddingLeft: 8,
  },
  postActionIconContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 12,
  },
  postActionContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postActions: {
    display: "flex",
    flexDirection: "row",
  },
  viewButton: {
    flex: 0.2,
  },
  postDataContainer: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "column",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: colors.navy1,
  },
  likeIcon: {
    width: 26,
  },
  commentIcon: {
    width: 24,
  },
  ggIcon: {
    height: 25,
  },
  shareIcon: {
    height: 21,
  },
  gameText: {
    marginTop: 8,
  },
  username: {
    marginBottom: 4,
  },
  button: {
    textDecoration: "none",
  },
  profilePicture: {
    alignSelf: "center",
    justifySelf: "center",
    width: 56,
    height: 56,
    marginRight: 12,
    borderRadius: 100,
    backgroundColor: colors.gray3,
    borderWidth: 0,
  },
  container: {
    justifyContent: "center",
    flex: 0.6,
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
};

export default PostPreview;
