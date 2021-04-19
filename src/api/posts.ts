import axios from "axios";

import { POST_API } from "./constants";

export const getPostById = async (
  postId: number
): Promise<ViewPostProjection> => {
  const post = await axios(`${POST_API}/public/${postId}`)
    .then((res) => res.data)
    .catch((e) => console.error(e));

  return post;
};
