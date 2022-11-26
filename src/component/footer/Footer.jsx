import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Outlet />
      <Container>
        <Row>
          <Col className="text-center py-3">Footer</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
