import { Col, Row } from "antd";
import Input from "antd/es/input/Input";
import React from "react";
import { Container } from "./index.styled";
import debounce from "lodash.debounce";

export const Header = ({ onChange }) => {
  const { Search } = Input;
  return (
    <Container>
      <a href={"/"} style={{ fontSize: 24, fontWeight: 500 }}>
        Bloom Books
      </a>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60%",
        }}
      >
        <Col span={16}></Col>
      </Row>
    </Container>
  );
};
