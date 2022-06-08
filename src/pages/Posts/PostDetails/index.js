import { Button, Divider, Card, Typography, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, updatePostById } from "../../../redux/postsSlice";

export const PostDetails = () => {
  const [editable, setEditable] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const postDetails = useSelector((state) => selectPostById(state, params?.id));
  const dispatch = useDispatch();

  const buttonTxt = editable ? "Cancel" : "Update";

  const updatePost = (values) => {
    dispatch(
      updatePostById({
        ...values,
        postId: +params?.id,
      })
    );

    setEditable(false);
  };

  return (
    <>
      <Button onClick={() => navigate("/")}>Go back to list</Button>
      <Divider />

      <Card
        title="Post"
        style={{ width: 600 }}
        extra={
          <Button type="primary" onClick={() => setEditable(!editable)}>
            {buttonTxt}
          </Button>
        }
      >
        <Form
          name="postDetailsForm"
          onFinish={updatePost}
          initialValues={{
            title: postDetails?.title,
            description: postDetails?.body,
          }}
        >
          {editable ? (
            <Form.Item label="Post title" name="title">
              <Input />
            </Form.Item>
          ) : (
            <Typography.Paragraph>
              Post Title: {postDetails?.title}
            </Typography.Paragraph>
          )}

          {editable ? (
            <Form.Item label="Post description" name="description">
              <Input />
            </Form.Item>
          ) : (
            <Typography.Paragraph>
              Post Description: {postDetails?.body}
            </Typography.Paragraph>
          )}

          {editable && <Button htmlType="submit">Update</Button>}
        </Form>
      </Card>
    </>
  );
};
