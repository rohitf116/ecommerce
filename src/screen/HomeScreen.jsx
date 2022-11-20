import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Product from "../component/product/Product";
const HomeScreen = (data) => {
  console.log(data, "i am home screen");
  return (
    <>
      <h1>Latest prduct</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} valueeee={data} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
