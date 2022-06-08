import React from "react";
import { Divider } from "antd";
import { PostControl } from "./PostControl";
import { PostsList } from "./PostsList";

export const Posts = () => {
  return (
    <>
      <Divider />
      <PostControl />
      <PostsList />
    </>
  );
};
