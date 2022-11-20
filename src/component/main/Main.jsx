import React from "react";
import "./main.css";
import { Container } from "react-bootstrap";
import HomeScreen from "../../screen/HomeScreen";
const Main = () => {
  return (
    <main className="main py-3">
      <Container>
        <HomeScreen />
      </Container>
    </main>
  );
};

export default Main;
