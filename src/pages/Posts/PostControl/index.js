import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/postsSlice";

export const PostControl = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(createPost(values));
  };

  return (
    <Row>
      <Col span={20}>
        <Form
          name="postForm"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input post title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input post description!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Create post!
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
