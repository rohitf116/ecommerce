import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "../component/product/Product";
import { listProduct } from "../actions/productActions";
import Message from "../component/message/Message";
import Loader from "../component/loader/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  let data = [];
  if (products?.data) {
    data = products.data;
  }
  console.log(error);
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <h1>Latest prduct</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {data?.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
