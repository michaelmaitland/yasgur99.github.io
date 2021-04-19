import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyleSheet } from "../../../constants/Styles";
import PostPreview from "../../../components/view/PostPreview";
import EmptyFiller from "../../../components/view/EmptyFiller";
import { getPostById } from "../../../api/posts";

export interface PostPreviewRouteProps {}

const PostPreviewRoute: React.FC<PostPreviewRouteProps> = (props) => {
  const { postId } = useParams<{ postId: string }>();

  const [post, setPost] = useState<ViewPostProjection>();
  const [noPostFound, setNoPostFound] = useState(false);

  useEffect(() => {
    getPostById(Number(postId)).then((post) => {
      setPost(post);
      if (!post) {
        setNoPostFound(true);
        // console.log("ooo");
      }
    });
  }, []);

  return (
    <div style={styles.page}>
      {noPostFound ? (
        <EmptyFiller
          error="404"
          description="Uh oh, we couldn't find the post you were looking for."
        />
      ) : null}
      {post ? <PostPreview post={post} /> : null}
    </div>
  );
};

const styles: StyleSheet = {
  page: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default PostPreviewRoute;
