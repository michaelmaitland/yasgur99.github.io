declare interface ViewPostProjection {
  /**  */
  caption: string;

  /**  */
  commentCount: number;

  /**  */
  createdOn: Date;

  /**  */
  game: NameAndProfilePicGameProjection;

  /**  */
  id: number;

  /**  */
  likeCount: number;

  /**  */
  gglikeCount: number;

  /**  */
  mediaURL: string;

  /**  */
  originalMediaURL: string;

  /** */
  shareCount: number;

  /**  */
  mentions: MentionProjection[];

  /**  */
  thumbnailURL: string;

  /**  */
  user: LightweightUserProjection;

  /**  */
  viewCount: number;
}

declare interface NameAndProfilePicGameProjection {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  profilePicUrl: string;
}

declare interface MentionProjection {
  /**  */
  id: number;

  /**  */
  user: NameOnlyUserProjection;
}

declare interface LightweightUserProjection {
  /**  */
  id: number;

  /**  */
  isFollowing: boolean;

  /**  */
  profile: ProfilePicAndFollowsCountProjection;

  /**  */
  username: string;
}

declare interface ProfilePicAndFollowsCountProjection {
  /**  */
  followsCount: number;

  /**  */
  profilePicUrl: string;
}
declare interface NameOnlyUserProjection {
  /**  */
  id: number;

  /**  */
  username: string;
}
