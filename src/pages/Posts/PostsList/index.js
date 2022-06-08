import { List, Avatar, Divider } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../../redux/postsSlice";

export const PostsList = () => {
  const list = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Divider orientation="left">Post List</Divider>

      <List
        bordered
        itemLayout="vertical"
        dataSource={list?.posts}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<Link to={`/post/${item?.id}`}>{item?.title}</Link>}
              description={item?.body}
            />
          </List.Item>
        )}
      />
    </>
  );
};
