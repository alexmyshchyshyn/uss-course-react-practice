import { Button, Col, Divider, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginStyles from "./login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ firstName: "", lastName: "" });

  const handleInputChange = (event, inputType) => {
    setLoginForm({
      ...loginForm,
      [inputType]: event.target.value,
    });
  };

  const onLoginClick = () => {
    if (loginForm?.firstName && loginForm?.lastName) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          authenticated: true,
        })
      );

      navigate("/");
    }
  };

  return (
    <>
      <Typography.Title className={loginStyles.welcomeText}>
        Welcome to the last course
      </Typography.Title>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col span={12} offset={6}>
          <Input
            addonBefore="First Name"
            value={loginForm?.firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
          />
        </Col>
      </Row>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col span={12} offset={6}>
          <Input
            addonBefore="Last Name"
            value={loginForm?.lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
          />
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col offset={10}>
          <Button onClick={onLoginClick} type="primary">
            Login into application
          </Button>
        </Col>
      </Row>
    </>
  );
};
